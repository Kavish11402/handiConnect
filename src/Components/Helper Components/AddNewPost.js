import { Dialog } from '@headlessui/react'
import {useContext, useRef} from "react";
import {myglobalContext} from "@/Context/MasterContext";



export default function AddNewPost()
{

    const myLocalContext = useContext(myglobalContext);

    const title = useRef(null)
    const description = useRef(null)

  return(
      <Dialog open={ myLocalContext.addPostDialogStatus } onClose={ () => myLocalContext.setAddPostDialogStatus(false) } className="relative z-40">

          <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

          <div className="fixed inset-0 flex items-center justify-center p-8">


              <div className={"w-1/2 rounded-xl bg-white"}>


                  <form>

                      {/*Header*/}
                      <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Create New Todo</header>


                      {/*Body*/}
                      <div className={"py-5 px-8"}>



                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Title</p>
                              <input ref={title} type={"text"}  className="
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                focus:border-indigo-500
                                                                focus:shadow-md" placeholder="Title of TODO" />

                          </div>



                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Description</p>
                              <input ref={description} type={"text"}  className="
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                focus:border-indigo-500
                                                                focus:shadow-md" placeholder="Description of TODO"/>
                          </div>



                      </div>


                      {/*Footer*/}
                      <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                          <button className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} onClick={()=>{myLocalContext.setAddPostDialogStatus(false)}}>Cancel</button>

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