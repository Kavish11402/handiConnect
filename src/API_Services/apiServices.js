import axios from "axios";
import { ref , uploadBytes , getDownloadURL } from "firebase/storage"
import {storage} from "@/Firebase";
import {v4} from "uuid";
import {useRouter} from "next/router";


const axiosURL = axios.create({ baseURL: "http://localhost:3000/api" });


export function savePostToDB( userPost,setUploadLoading,setAddPostDialogStatus,router )
{

    const imageRef = ref( storage , `Post_Images/${userPost.postImage.name + v4()}` )
    uploadBytes( imageRef , userPost.postImage )
        .then( (item)=>{
            getDownloadURL(item.ref)
                .then( (url)=>{
                    userPost = { ...userPost , ...{postImage : `${url}`} }
                    console.log(userPost)
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
                } )
        } )
}

export function getPostsFromDB()
{
    return axiosURL
        .get('getAllPosts')
        .then((response) => response.data);
}