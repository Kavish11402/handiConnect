import { Dialog } from '@headlessui/react'
import {useContext, useRef, useState} from "react";
import {myGlobalContext} from "@/Context/MasterContext";
import {savePostToFirebaseStorage} from "@/API_Services/apiServices";
import {ThreeDots} from "react-loader-spinner";
import {useRouter} from "next/router";



export default function AddNewPost()
{

    const {userInfo , addPostDialogStatus , setAddPostDialogStatus , uploadLoading , setUploadLoading } = useContext(myGlobalContext);

    const pName = useRef(null)
    const pPrice = useRef(null)
    const pDescription = useRef(null)
    const pAddress = useRef(null)

    const [ pImage , setPImage ] = useState(null)
    const router = useRouter()


    function formHandler()
    {
        setUploadLoading(true)
        const data =
            {
                uploaderName : userInfo.userName,
                uploaderProfileImage : userInfo.profileImage,
                uploaderLocation : "Lucknow, India",
                productName: pName.current.value,
                productDesc : pDescription.current.value,
                productPrice : pPrice.current.value,
                address : pAddress.current.value,
                productLikesList : [],
                productComments : []
            };
        savePostToFirebaseStorage(data,setUploadLoading,setAddPostDialogStatus,router,Object.values(pImage))

    }




  return(
      <Dialog open={ addPostDialogStatus } onClose={ () => setAddPostDialogStatus(false) } className="relative z-40">

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
                              <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Create New Post</header>


                              {/*Body*/}
                              <div className={"py-5 px-8"}>



                                  {/*Product Photos*/}
                                  <div className={"my-5"}>
                                      <p className={"mb-2 text-md font-bold"}>Product Name</p>
                                      <input onChange={ (e)=>{setPImage(e.target.files)} } multiple type={"file"} accept={"image/heif , image/jpeg , image/png , image/webp"} className={"border-0 ring-0"} placeholder="Image of Product" />
                                  </div>


                                  {/*Product Name*/}
                                  <div className={"my-5"}>
                                      <p className={"mb-2 text-md font-bold"}>Product Title</p>
                                      <input ref={pName} type={"text"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="Title of Product" />
                                  </div>


                                  {/*Product Price*/}
                                  <div className={"my-5"}>
                                      <p className={"mb-2 text-md font-bold"}>Product Price</p>
                                      <input ref={pPrice} type={"number"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="Price of Product" />
                                  </div>

                                  {/*address*/}
                                  <div className={"my-5"}>
                                      <p className={"mb-2 text-md font-bold"}>Address</p>
                                      <textarea ref={pAddress} rows={2} className=" w-full rounded-xl px-2 border-2 border-black active:border-indigo-500 focus:shadow-md" placeholder="Address"/>
                                  </div>

                                  {/*Product Description*/}
                                  <div className={"my-5"}>
                                      <p className={"mb-2 text-md font-bold"}>Product Description</p>
                                      <textarea ref={pDescription} rows={4} className=" w-full rounded-xl px-2 border-2 border-black active:border-indigo-500 focus:shadow-md" placeholder="Description of Product"/>
                                  </div>


                              </div>


                              {/*Footer*/}
                              <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                                  <button className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} onClick={()=>{setAddPostDialogStatus(false)}}>Cancel</button>

                                  <button type={"submit"} className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} >
                                      Post
                                  </button>

                              </footer>

                          </form>


                  }





              </div>
          </div>

      </Dialog>
  );
}