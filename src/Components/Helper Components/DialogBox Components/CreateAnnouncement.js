import {myGlobalContext} from "@/Context/MasterContext";
import {Dialog} from "@headlessui/react";
import {useContext} from "react";

export default function CreateAnnouncement()
{
  const {createAnnouncementDialogStatus , setCreateAnnouncementDialogStatus } = useContext(myGlobalContext);



  function formHandler()
  {
  }




  return(
      <Dialog open={ createAnnouncementDialogStatus } onClose={ () => setCreateAnnouncementDialogStatus(false) } className="relative z-40">

        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

        <div className="fixed inset-0 flex items-center justify-center p-8">


          <div className={"w-1/2 rounded-xl bg-white"}>



              <form onSubmit={ (event)=>{ event.preventDefault(); formHandler(); } } >

                  {/*Header*/}
                  <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Create New Announcement</header>


                  {/*Body*/}
                  <div className={"py-5 px-8"}>





                  </div>


                  {/*Footer*/}
                  <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                      <button className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} onClick={()=>{setCreateAnnouncementDialogStatus(false)}}>Cancel</button>

                      <button type={"submit"} className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} >
                          Create Announcement
                      </button>

                  </footer>

              </form>





          </div>
        </div>

      </Dialog>
  );
}