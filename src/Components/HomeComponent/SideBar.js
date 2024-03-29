import announcementImg from "@/Assets/icons/bell.png"
import settingImg from "@/Assets/icons/setting.png"
import handiConnectLogo from "@/Assets/logo/ProjectLogo.png"

import Image from "next/image";
import {useContext} from "react";
import {myGlobalContext} from "@/Context/MasterContext";
import Link from "next/link";

export default function SideBar()
{
    const myLocalContext = useContext(myGlobalContext);
  return(
      <div className={"w-[20%] flex flex-col justify-between h-screen p-4 border-r-4 border-zinc-300"}>

          {/* App Name And Logo */}
          <div className={"flex flex-col justify-center"}>
              <div className={"mx-auto w-fit h-fit my-auto"}>
                  <Image className={"w-36"} src={handiConnectLogo} alt={"Logo"}/>
              </div>
          </div>


          {/* Profile */}
          <div className={"flex flex-col justify-center border-x-4 py-8 border-orange-400 rounded-3xl"}>


              {/* Profile Image */}
              <div className={"mx-auto bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1.5 rounded-full w-fit mb-5"}>


                  <div className={"bg-white rounded-full overflow-clip h-28 w-28"}>

                      <img className={"rounded-full "} src={myLocalContext.userInfo.profileImage} alt={"Profile Image"}/>


                  </div>

              </div>



              {/* User Name */}
              <div className={"mx-auto mb-1"}>
                  <h1 className={"font-medium text-3xl"}>
                      {myLocalContext.userInfo.userName}
                  </h1>
              </div>

              {/* City , Country Name */}
              <div className={"mx-auto mb-2"}>
                  <h1 className={"font-medium text-xl"}>Lucknow, India</h1>
              </div>

              {/*View Profile*/}
              <div className={"w-fit mx-auto"}>
                  <p
                      onClick={ ()=>{ myLocalContext.setViewProfileDialogStatus(true) } }
                      className={"text-blue-500 font-semibold underline underline-offset-4 hover:text-red-500 cursor-pointer transition-all ease-linear"}>
                      View Profile
                  </p>
              </div>

          </div>


          {/* Settings or News Panel */}
          <div className={"space-y-5"}>

              {/* Announcements */}
              {/*<Link href={"/announcements"} className={"cursor-pointer flex flex-row bg-stone-400 hover:bg-stone-300 transition-all ease-linear rounded-3xl pl-6 py-3 space-x-4 w-72"}>

                  <Image className={"w-8 h-8"} src={announcementImg} alt={"Icon"}/>
                  <h3 className={"font-medium text-lg h-fit my-auto"}>Announcements</h3>

              </Link>*/}


              {/* Settings */}
              {/*<div className={"cursor-pointer flex flex-row bg-stone-400 hover:bg-stone-300 transition-all ease-linear rounded-3xl pl-6 py-3 space-x-4 w-72"}>

                  <Image className={"w-8 h-8"} src={settingImg} alt={"Icon"}/>
                  <h3 className={"font-medium text-lg h-fit my-auto"}>Settings</h3>

              </div>*/}


              {/* Contact US */}
              {/*<div className={"cursor-pointer flex flex-row bg-stone-400 hover:bg-stone-300 transition-all ease-linear rounded-3xl pl-6 py-3 space-x-4 w-72"}>

                  <Image className={"w-8 h-8"} src={announcementImg} alt={"Icon"}/>
                  <h3 className={"font-medium text-lg h-fit my-auto"}>Contact Us</h3>

              </div>*/}

          </div>


          {/* Version No. */}
          <div>
              <p className={"text-lg"}>V-2.3.1</p>
          </div>


      </div>
  );
}