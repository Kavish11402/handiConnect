import axios from "axios";
import { ref , uploadBytes , getDownloadURL } from "firebase/storage"
import {storage} from "@/Firebase";
import {v4} from "uuid";


const axiosURL = axios.create({ baseURL: "http://localhost:3000/api" });


export function savePostToFirebaseStorage( userPost,setUploadLoading,setAddPostDialogStatus,router )
{
    let allURLs = [];
    userPost.postImage.map(
        (singleFile,index)=>{

            const imageRef = ref(storage,`Post_Images/${singleFile.name+v4()}`)

            uploadBytes( imageRef , singleFile )
                .then(
                    (item)=>{
                        getDownloadURL(item.ref)
                            .then(
                                (url)=>{
                                    allURLs.push(url)
                                    if( ((userPost.postImage.length)-1)===index  )
                                    {
                                        userPost = { ...userPost , ...{postImage: allURLs} }
                                        console.log("All saved URLs =>",userPost)
                                        savePostToMongoDB(userPost,setUploadLoading,setAddPostDialogStatus,router)
                                    }
                                }
                            )
                    }
                )

        }
    )
}

function savePostToMongoDB(userPost,setUploadLoading,setAddPostDialogStatus,router)
{
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

}

export function getPostsFromDB()
{
    return axiosURL
        .get('getAllPosts')
        .then((response) => response.data);
}