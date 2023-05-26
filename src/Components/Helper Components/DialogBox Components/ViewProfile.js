import {ThreeDots} from "react-loader-spinner";
import {Dialog} from "@headlessui/react";
import {useContext, useRef, useState} from "react";
import {myGlobalContext} from "@/Context/MasterContext";
import {useRouter} from "next/router";
import {editProfile} from "@/API_Services/apiServices";

export default function ViewProfile()
{
    const { setViewProfileDialogStatus , viewProfileDialogStatus , uploadLoading , setUploadLoading , userInfo , setUserInfo } = useContext(myGlobalContext);
    const [ editProfileState , setEditProfileState ] = useState(false)

    const userName = useRef(null)
    const userPhoneNo = useRef(null)
    const [ userImage , setUserImage ] = useState(null)
    const router = useRouter()



    function editProfileFormHandler()
    {

        setUploadLoading(true)

        let dummyData = {};

        if( userImage !== null )
            dummyData = { ...dummyData , ...{ profileImage : userImage[0] } };

        if( userName.current.value !== '' )
            dummyData = { ...dummyData , ...{ name : userName.current.value } };

        if( userPhoneNo.current.value !== '' )
            dummyData = { ...dummyData , ...{ phoneNo : userPhoneNo.current.value } }




        console.log(userInfo);

        editProfile( dummyData , setViewProfileDialogStatus , setUploadLoading , setUserInfo , router , setEditProfileState )
            .then()


    }





    return(
        <Dialog open={ viewProfileDialogStatus } onClose={ () => setViewProfileDialogStatus(false) } className="relative z-40">

            <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

            <div className="fixed inset-0 flex items-center justify-center p-8">


                <div className={"w-1/2 rounded-xl bg-white"}>




                    <form >

                        {/*Header*/}
                        <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >
                            Your Profile
                        </header>


                        {
                            editProfileState?


                                /*Edit Profile Body*/
                                uploadLoading?
                                    <div>

                                        <div className={"py-5 px-8 h-96 flex flex-col justify-center"}>

                                            <div className={"h-fit w-fit mx-auto"}>
                                                <ThreeDots
                                                    height={"140"}
                                                    width={"140"}
                                                    radius={"9"}
                                                    color={"#ee24ff"}
                                                    ariaLabel={"three-dots-loading"}
                                                    wrapperStyle={{}}
                                                    wrapperClassName={""}
                                                    visible={true}
                                                />
                                            </div>
                                            <h1 className={"mx-auto w-fit h-fit text-2xl font-bold"}>Making Changes Please Wait</h1>

                                        </div>


                                    </div>
                                    :
                                    <div className={"py-5 px-8"}>


                                    <p className={"font-semibold animate-TextWarningColor"}>Note:- Fill only those fields you want to change information</p>


                                    {/* Profile Image */}
                                    <div className={"my-5"}>
                                        <p className={"mb-2 text-md font-bold"}>Profile Image</p>
                                        <input onChange={ (e)=>{setUserImage(e.target.files)} } type={"file"} accept={"image/heif , image/jpeg , image/png"} className={"border-0 w-full"} placeholder="Image of Product" />
                                    </div>

                                    {/* Name */}
                                    <div className={"my-5"}>
                                        <p className={"mb-2 text-md font-bold"}>User Name</p>
                                        <input ref={userName} type={"text"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder={userInfo.userName} />
                                    </div>




                                    {/* Phone No. */}
                                    <div className={"my-5"}>
                                        <p className={"mb-2 text-md font-bold"}>User Phone Number</p>
                                        <input ref={userPhoneNo} type={"number"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="User's Phone No." />
                                    </div>






                                </div>


                                :

                                /*Profile Body*/
                                <div className={"py-5 px-8"}>


                                    {/* Profile Image */}
                                    <div className={"mx-auto bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1.5 rounded-3xl w-fit mb-5"}>
                                        <div className={"bg-white rounded-3xl overflow-clip h-44 w-44"}>
                                            <img className={""} src={userInfo.profileImage} alt={"Profile Image"}/>
                                        </div>
                                    </div>



                                    {/* Name */}
                                    <div className={"my-5"}>
                                        <p className={"mb-2 text-md font-bold underline underline-offset-4"}>Name</p>
                                        <p className={"font-medium text-3xl px-20"}>
                                            {userInfo.userName}
                                        </p>
                                        {/*<input type={"text"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="User's Name" />*/}
                                    </div>


                                    {/* Email */}
                                    <div className={"my-5"}>
                                        <p className={"mb-2 text-md font-bold underline underline-offset-4"}>Email</p>
                                        <p className={"font-medium text-3xl px-20"}>
                                            {userInfo.userEmail}
                                        </p>
                                        {/*<input type={"text"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="User's Name" />*/}
                                    </div>

                                    {/* Occupation */}
                                    <div className={"my-5"}>
                                        <p className={"mb-2 text-md font-bold underline underline-offset-4"}>Occupation</p>
                                        <p className={"font-medium text-3xl px-20"}>
                                            {userInfo.userOccupation}
                                        </p>
                                        {/*<input type={"text"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="User's Name" />*/}
                                    </div>








                                </div>

                        }




















                        {/*Footer*/}
                        <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                            {
                                editProfileState?

                                    <button
                                        className={"bg-red-600 hover:bg-red-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"}
                                        onClick={(e)=>{e.preventDefault(); setEditProfileState(false)}}
                                    >
                                        Cancel Edit
                                    </button>

                                    :

                                    <button
                                        className={"bg-red-600 hover:bg-red-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"}
                                        onClick={()=>{setViewProfileDialogStatus(false)}}
                                    >
                                        Cancel
                                    </button>
                            }




                            {
                                editProfileState?

                                    <button
                                        className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"}
                                        onClick={ (event)=>{ event.preventDefault(); editProfileFormHandler(); } }
                                    >
                                        Make Changes
                                    </button>

                                    :

                                    <button
                                        className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"}
                                        onClick={ (event)=>{ event.preventDefault(); setEditProfileState(true) } }
                                    >
                                        Edit Profile
                                    </button>

                            }





                        </footer>

                    </form>










                </div>
            </div>

        </Dialog>
    );
}