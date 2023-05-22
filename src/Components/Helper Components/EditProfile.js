import {ThreeDots} from "react-loader-spinner";
import {Dialog} from "@headlessui/react";
import {useContext, useRef, useState} from "react";
import {myGlobalContext} from "@/Context/MasterContext";
import {editProfile} from "@/API_Services/apiServices";
import {useRouter} from "next/router";

export default function EditProfile()
{
    const { editProfileDialogStatus , setEditProfileDialogStatus , uploadLoading , setUploadLoading , userInfo , setUserInfo } = useContext(myGlobalContext);

    const userName = useRef(null)
    const userPhoneNo = useRef(null)
    const [ userImage , setUserImage ] = useState(null)
    const router = useRouter()


    function formHandler()
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

        editProfile( dummyData , setEditProfileDialogStatus , setUploadLoading , setUserInfo , router )
            .then()


    }

    
  return(
      <Dialog open={ editProfileDialogStatus } onClose={ () => setEditProfileDialogStatus(false) } className="relative z-40">

        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

        <div className="fixed inset-0 flex items-center justify-center p-8">


          <div className={"w-1/2 rounded-xl bg-white"}>



              {


                  uploadLoading?
                      <div>

                          <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Create New Post</header>

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
                              <h1 className={"mx-auto w-fit h-fit text-2xl font-bold"}>Uploading Please Wait</h1>

                          </div>


                      </div>
                      :
                      <form onSubmit={ (event)=>{ event.preventDefault(); formHandler(); } } >

                          {/*Header*/}
                          <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >
                              Edit Your Profile
                          </header>


                          {/*Body*/}
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
                                  <input ref={userName} type={"text"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="User's Name" />
                              </div>




                              {/* Phone No. */}
                              <div className={"my-5"}>
                                  <p className={"mb-2 text-md font-bold"}>User Phone Number</p>
                                  <input ref={userPhoneNo} type={"number"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="User's Phone No." />
                              </div>






                          </div>


                          {/*Footer*/}
                          <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                              <button className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} onClick={()=>{setEditProfileDialogStatus(false)}}>Cancel</button>

                              <button type={"submit"} className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} >
                                  OK
                              </button>

                          </footer>

                      </form>


              }










          </div>
        </div>

      </Dialog>
  );
}