import {createContext, useEffect, useState} from "react";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc , doc , getDoc } from "firebase/firestore"
import {db, firebaseAuthentication, storage} from "@/Firebase";
import toast from "react-hot-toast";
import {setCookie} from "cookies-next";
import {useRouter} from "next/router";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

export const myGlobalContext = createContext(null)



export default function MasterContext(props)
{

    const router= useRouter();
    const [userInfo , setUserInfo] = useState({});
    const [ uploadLoading , setUploadLoading ] = useState(false);

    /*  Dialog box States */
    const [ addPostDialogStatus , setAddPostDialogStatus ] = useState( false );
    const [ createAnnouncementDialogStatus , setCreateAnnouncementDialogStatus ] = useState(false);
    const [ editPostDialogStatus , setEditPostDialogStatus ] = useState(false);
    const [ editProfileDialogStatus , setEditProfileDialogStatus ] = useState(false);
    const [ viewProfileDialogStatus , setViewProfileDialogStatus ] = useState(false);
    const [ viewPostDialogStatus , setViewPostDialogStatus ] = useState(false);
    const [ viewPostData , setViewPostData ] = useState(
        {
            "_id": "647080b8b99dc00a6a69f924",
            "uploaderName": "Sandeep",
            "uploaderProfileImage": "https://firebasestorage.googleapis.com/v0/b/handiconnect-53d03.appspot.com/o/User_Profile_Images%2F20230429_130206.jpg98aa0215-4990-4812-9876-a9a4dc4114b4?alt=media&token=e5196a3e-5e08-4500-92fb-3ced6926104a",
            "uploaderLocation": "Lucknow, India",
            "postImage": [
                "https://firebasestorage.googleapis.com/v0/b/handiconnect-53d03.appspot.com/o/Post_Images%2FWhatsApp%20Image%202023-04-21%20at%203.54.11%20PM.jpega33d32b2-8723-4a98-95d4-70d573556343?alt=media&token=17399a01-a26f-42e6-9603-83c76b768587"
            ],
            "productName": "action figure ",
            "productComments" : [],
            "productDesc": "fdgfd",
            "address" : "",
            "productPrice": "435",
            "productLikesList": [
                "d527EPrrYXfIcRs0i4FdAdUVfCq2",
                "vYMXpUplD7aAQU2NxvVaJ0ZcXL53"
            ],
            "__v": 0
        }
    );




    useEffect(
        ()=>
        {
            onReload()
        },
        []
    )


    function onReload()
    {
        setUserInfo(  JSON.parse( localStorage.getItem( "userCredential" ) )   )
    }




    async function userLogin( userEmail , userPassword )
    {
        await signInWithEmailAndPassword(firebaseAuthentication, userEmail, userPassword)
            .then(
                (userCredential)=>{

                    getDoc( doc( db , "Users" , `${userCredential.user.uid}` ) )
                        .then(
                            (user)=>{

                                const userData = user.data()
                                const temp =
                                    {
                                        profileImage : userData.profileImage,
                                        uid : userCredential.user.uid,
                                        userEmail : userCredential.user.email,
                                        userName : userData.name,
                                        userOccupation : userData.occupation
                                    }
                                setUserInfo(temp)
                                localStorage.setItem( "userCredential" , JSON.stringify( temp ) )
                                setCookie("userState" , true)
                                router.push("/HomePage").then();
                                toast.success("Congratulations you are logged in")
                            }
                        )

                }
            )
            .catch(
                (error)=>{toast.error(error.message)}
            )
     }


    function createUser( profileImage , userProfile , userPass )
    {


        uploadBytes( ref(storage,`User_Profile_Images/${profileImage.name+v4()}`) , profileImage )
            .then((uploadResult)=>
                {
                    getDownloadURL( uploadResult.ref )
                        .then((url)=>
                        {

                            saveUserProfileToFirebase( url , userProfile , userPass )

                        })
                }
            )
    }

    function saveUserProfileToFirebase(url , userProfile , userPass)
    {
        userProfile = { ...userProfile , ...{ profileImage : url } }

        createUserWithEmailAndPassword( firebaseAuthentication , userProfile.email , userPass)
            .then(
                (userCredential)=>{
                    setDoc( doc( db , "Users" , `${userCredential.user.uid}` ), userProfile )
                        .then(
                            ()=>{
                                router.push("/HomePage").then();
                                toast.success(`Congratulations Account using Email Id : ${userProfile.email} Created Successfully`)
                            }
                        )
                }
            )
            .catch((e)=>{ toast.error(e.message) })

    }

















    return(

        <myGlobalContext.Provider value={
        {
            userInfo,
            setUserInfo,
            userLogin,
            createUser,
            addPostDialogStatus,
            setAddPostDialogStatus,
            uploadLoading,
            setUploadLoading,
            createAnnouncementDialogStatus,
            setCreateAnnouncementDialogStatus,
            editProfileDialogStatus,
            setEditProfileDialogStatus,
            viewProfileDialogStatus ,
            setViewProfileDialogStatus,
            viewPostDialogStatus ,
            setViewPostDialogStatus,
            viewPostData ,
            setViewPostData,
            editPostDialogStatus,
            setEditPostDialogStatus
        }
      }>
          {props.children}
      </myGlobalContext.Provider>

    );
}