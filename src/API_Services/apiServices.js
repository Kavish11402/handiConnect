import axios from "axios";
import { ref , uploadBytes , getDownloadURL } from "firebase/storage"
import {storage} from "@/Firebase";
import {v4} from "uuid";


const axiosURL = axios.create({ baseURL: "http://localhost:3000/api" });







export function savePostToFirebaseStorage( userPost,setUploadLoading,setAddPostDialogStatus,router,pImage )
{
    console.log(pImage)

    let URLArray = []

    pImage.map(
        (singleFile) => {

            uploadBytes( ref(storage,`Post_Images/${singleFile.name+v4()}`) , singleFile )
                .then((uploadResult)=>
                    {
                        getDownloadURL( uploadResult.ref )
                            .then((url)=>
                            {
                                setURLs(url,URLArray,pImage.length,userPost,setUploadLoading,setAddPostDialogStatus,router)

                            })
                    }
                )


        }
    )


}
function setURLs(url, URLArray , pImageLength , userPost , setUploadLoading,setAddPostDialogStatus,router )
{
    URLArray.push(url)
    if( (URLArray.length===pImageLength) )
    {
        savePostToMongoDB(URLArray,userPost , setUploadLoading,setAddPostDialogStatus,router)
    }
}





function savePostToMongoDB(allURL,userPost , setUploadLoading,setAddPostDialogStatus,router)
{
    userPost = { ...userPost , ...{ postImage : allURL } }
    axiosURL
        .post("/savePost" , userPost)
        .then(()=>
        {
            console.log("all Done");
            setAddPostDialogStatus(false)
            setUploadLoading(false)
            router.push("/HomePage")
        })
        .catch(()=>{console.log("error Occurred")})
    console.log("Data =>",userPost);

}

export function getPostsFromDB()
{
    return axiosURL
        .get('getAllPosts')
        .then((response) => response.data);
}