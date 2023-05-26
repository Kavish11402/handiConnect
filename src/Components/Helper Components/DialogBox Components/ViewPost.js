import {useContext, useRef, useState} from "react";
import {myGlobalContext} from "@/Context/MasterContext";
import {useRouter} from "next/router";
import {editProfile} from "@/API_Services/apiServices";
import {Dialog} from "@headlessui/react";
import {ThreeDots} from "react-loader-spinner";

export default function ViewPost()
{
    const { viewPostDialogStatus , setViewPostDialogStatus , viewPostData , setViewPostData } = useContext(myGlobalContext);



    return(
        <Dialog open={ viewPostDialogStatus } onClose={ () => setViewPostDialogStatus(false) } className="relative z-40">

            <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

            <div className="fixed inset-0 flex items-center justify-center p-8">


                <div className={"w-1/2 rounded-xl bg-white"}>




                    <form >

                        {/*Header*/}
                        <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >
                            Your Profile
                        </header>





                        {/*Footer*/}
                        <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >


                            <button
                                className={"bg-red-600 hover:bg-red-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"}
                                onClick={()=>{setViewPostDialogStatus(false)}}
                            >
                                Cancel
                            </button>





                        </footer>

                    </form>










                </div>
            </div>

        </Dialog>
    );
}