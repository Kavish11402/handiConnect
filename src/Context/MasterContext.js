import {createContext, useEffect, useState} from "react";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc , doc , getDoc } from "firebase/firestore"
import {db, firebaseAuthentication} from "@/Firebase";
import toast from "react-hot-toast";
import {setCookie} from "cookies-next";
import {useRouter} from "next/router";

export const myGlobalContext = createContext(null)



export default function MasterContext(props)
{

    const router = useRouter();
    const [userInfo , setUserInfo] = useState({})
    const [ addPostDialogStatus , setAddPostDialogStatus ] = useState( false )



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


    async function createUser( userName , userPhoneNo , userEmail , userPass , userOccupation )
    {
        createUserWithEmailAndPassword( firebaseAuthentication , userEmail , userPass)
            .then(
                (userCredential)=>{
                    setDoc(
                        doc( db , "Users" , `${userCredential.user.uid}` ),
                        {
                            name : userName,
                            phoneNo : userPhoneNo,
                            email : userEmail,
                            occupation : userOccupation
                        }
                    ).then()
                    router.push("/HomePage").then();
                    toast.success(`Congratulations Account using Email Id : ${userEmail} Created Successfully`) }
            )
            .catch((e)=>{ toast.error(e.message) })
    }

















    return(

        <myGlobalContext.Provider value={
        {
            userInfo : userInfo,
            userLogin : userLogin,
            createUser : createUser,
            addPostDialogStatus : addPostDialogStatus,
            setAddPostDialogStatus : setAddPostDialogStatus
        }
      }>
          {props.children}
      </myGlobalContext.Provider>

    );
}