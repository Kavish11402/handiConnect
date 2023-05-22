import axios from "axios";
import { ref , uploadBytes , getDownloadURL } from "firebase/storage"
import { doc , updateDoc } from "firebase/firestore"
import {db, storage} from "@/Firebase";
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


export async function editProfile( userData , setEditProfileDialogStatus , setUploadLoading , setUserInfo , router )
{

    const oldData = JSON.parse( localStorage.getItem( "userCredential" ) )

    if( userData.profileImage )
    {
        const uploadResult = await uploadBytes( ref(storage,`User_Profile_Images/${userData.profileImage.name+v4()}`) , userData.profileImage )

        const url = await getDownloadURL( uploadResult.ref )

        userData={ ...userData , ...{ profileImage : url } }

    }

    await updateDoc(
        doc( db , "Users" , `${JSON.parse( localStorage.getItem( "userCredential" ) ).uid }` ) ,
        userData
    )


    let userCred = JSON.parse( localStorage.getItem( "userCredential" ) )

    if( userData.profileImage )
        userCred = { ...userCred , ...{ profileImage : userData.profileImage } }

    if( userData.name )
        userCred = { ...userCred , ...{ userName : userData.name } }
    /*TODO - Add Phone No. too here*/



    localStorage.setItem( "userCredential" , JSON.stringify( userCred ) )
    setUserInfo( userCred )






    axiosURL
        .post(
            "/updateAllPostAfterEditProfile",
            {
                uploaderName : userCred.userName,
                uploaderProfileImage : userCred.profileImage,
                oldData
            }
        )
        .then(()=>
        {
            console.log("all Done");
            setEditProfileDialogStatus(false)
            setUploadLoading(false)
            router.push("/HomePage")
        })
        .catch(()=>{console.log("error Occurred")})






}


export function deletePost(postID,router)
{
    axiosURL
        .delete("/deletePostAPI" ,
            {
                data:{
                    id:postID
                }
            } )
        .then(()=>
        {
            router.push("/HomePage")
        })
        .catch(()=>{console.log("error Occurred")})
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