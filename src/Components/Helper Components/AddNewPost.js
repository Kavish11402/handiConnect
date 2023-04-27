import { Dialog } from '@headlessui/react'
import {useContext, useRef, useState} from "react";
import {myGlobalContext} from "@/Context/MasterContext";
import {savePostToDB} from "@/API_Services/apiServices";



export default function AddNewPost()
{

    const {userInfo , addPostDialogStatus , setAddPostDialogStatus } = useContext(myGlobalContext);


    /*const pImage = useRef(null)*/
    const pName = useRef(null)
    const pPrice = useRef(null)
    const pDescription = useRef(null)

    const [ pImage , setPImage ] = useState(null)


    function formHandler(event)
    {
        const data =
            {
                uploaderName : userInfo.userName,
                uploaderLocation : "Lucknow, India",
                postImage : pImage,
                productName: pName.current.value,
                productDesc : pDescription.current.value,
                productPrice : pPrice.current.value,
            }
            savePostToDB(data)
    }




  return(
      <Dialog open={ addPostDialogStatus } onClose={ () => setAddPostDialogStatus(false) } className="relative z-40">

          <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

          <div className="fixed inset-0 flex items-center justify-center p-8">


              <div className={"w-1/2 rounded-xl bg-white"}>


                  <form onSubmit={ (event)=>{ event.preventDefault(); formHandler(event); } } >

                      {/*Header*/}
                      <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Create New Post</header>


                      {/*Body*/}
                      <div className={"py-5 px-8"}>



                          {/* Product Photos */}
                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Product Name</p>
                              <input onChange={ (e)=>{setPImage(e.target.files[0])} } type={"file"} accept={"image/heif , image/jpeg , image/png"} className={"border-0 w-full"} placeholder="Image of Product" />
                          </div>


                          {/* Product Name */}
                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Product Name</p>
                              <input ref={pName} type={"text"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="Name of Product" />
                          </div>


                          {/* Product Price */}
                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Product Price</p>
                              <input ref={pPrice} type={"number"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="Price of Product" />
                          </div>


                          {/* Product Description */}
                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Product Description</p>
                              <textarea ref={pDescription} className=" w-full rounded-xl px-2 border-2 border-black active:border-indigo-500 focus:shadow-md" placeholder="Description of Product"/>
                          </div>


                      </div>


                      {/*Footer*/}
                      <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                          <button className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} onClick={()=>{setAddPostDialogStatus(false)}}>Cancel</button>

                          <button type={"submit"} className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} >
                              Add Todo
                          </button>

                      </footer>

                  </form>


              </div>
          </div>

      </Dialog>
  );
}