import profileImg from "@/Assets/icons/account.png"
import announcementImg from "@/Assets/icons/bell.png"
import settingImg from "@/Assets/icons/setting.png"
import handiConnectLogo from "@/Assets/logo/Untitled-2.png"

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

              {/* edit profile group */}
              <div onClick={ ()=>{ myLocalContext.setEditProfileDialogStatus(true) } } className={"mx-auto flex flex-row w-fit rounded-3xl px-5 py-2 bg-stone-300 space-x-2 cursor-pointer hover:bg-stone-400 transition-all ease-linear"}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                       stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                  </svg>
                  <p className={"text-lg font-semibold"}>Edit</p>
              </div>

          </div>


          {/* Settings or News Panel */}
          <div className={"space-y-5"}>

              {/* Announcements */}
              <Link href={"/announcements"} className={"cursor-pointer flex flex-row bg-stone-400 hover:bg-stone-300 transition-all ease-linear rounded-3xl pl-6 py-3 space-x-4 w-72"}>

                  <Image className={"w-8 h-8"} src={announcementImg} alt={"Icon"}/>
                  <h3 className={"font-medium text-lg h-fit my-auto"}>Announcements</h3>

              </Link>


              {/* Settings */}
              <div className={"cursor-pointer flex flex-row bg-stone-400 hover:bg-stone-300 transition-all ease-linear rounded-3xl pl-6 py-3 space-x-4 w-72"}>

                  <Image className={"w-8 h-8"} src={settingImg} alt={"Icon"}/>
                  <h3 className={"font-medium text-lg h-fit my-auto"}>Settings</h3>

              </div>


              {/* Contact US */}
              <div className={"cursor-pointer flex flex-row bg-stone-400 hover:bg-stone-300 transition-all ease-linear rounded-3xl pl-6 py-3 space-x-4 w-72"}>

                  <Image className={"w-8 h-8"} src={announcementImg} alt={"Icon"}/>
                  <h3 className={"font-medium text-lg h-fit my-auto"}>Contact Us</h3>

              </div>

          </div>


          {/* Version No. */}
          <div>
              <p className={"text-lg"}>V-1.1.0</p>
          </div>


      </div>
  );
}