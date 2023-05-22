import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Menu, Transition} from "@headlessui/react";
import {Fragment, useContext} from "react";
import {deletePost} from "@/API_Services/apiServices";
import {useRouter} from "next/router";
import {myGlobalContext} from "@/Context/MasterContext";

export default function SingleFeedPost({ singlePost })
{

    const router = useRouter()
    const myLocalContext = useContext(myGlobalContext);

    function editPostHandler()
    {
        console.log("Edit Post Activated")
    }

    function deletePostHandler(postID)
    {
        deletePost(postID,router)
    }




  return(

      <div className={"bg-white p-5 rounded-2xl space-y-5 drop-shadow-2xl"}>



          {/* Profile */}
          <div className={"flex flex-row space-x-5 justify-between"}>



              <div className={"flex flex-row space-x-5"}>
                  {/* Photo */}
                  <div className={"border-4 border-pink-500 rounded-full w-20 h-20 overflow-clip"}>
                      <img className={""} src={singlePost.uploaderProfileImage} alt={"Profile photo"} />
                  </div>

                  {/* Name , Location */}
                  <div className={"flex flex-col justify-center"}>
                      <h1 className={"text-2xl"}>{singlePost.uploaderName}</h1>
                      <h2 className={"text-zinc-500"}>{singlePost.uploaderLocation}</h2>
                  </div>
              </div>


              <div className={"flex flex-col justify-center"}>

                  <Menu as="div" className="z-50 relative">
                      <Menu.Button>
                          <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              fill={"none"} viewBox={"0 0 24 24"} strokeWidth={"1.5"}
                              stroke={"currentColor"} className={"w-10 h-10"}
                          >
                              <path
                                  strokeLinecap={"round"} strokeLinejoin={"round"}
                                  d={"M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"}
                              />
                          </svg>

                      </Menu.Button>
                      <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                      >
                          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                  <button
                                      onClick={ ()=>{editPostHandler()} }
                                      className={"ui-active:bg-violet-500 ui-active:text-white ui-not-active: text-violet-500 group flex w-full items-center rounded-md px-2 py-2 text-sm"}>
                                      Edit Post
                                  </button>
                              </Menu.Item>



                              {

                                  myLocalContext.userInfo.userName===singlePost.uploaderName&&
                                  <Menu.Item>
                                      <button
                                          onClick={ ()=>{deletePostHandler(singlePost._id)} }
                                          className={"ui-active:bg-red-500 ui-active:text-white ui-not-active: text-red-500 group flex w-full items-center rounded-md px-2 py-2 text-sm"}>
                                          Delete Post
                                      </button>
                                  </Menu.Item>

                              }



                          </Menu.Items>
                      </Transition>
                  </Menu>







              </div>












          </div>















          {/* Post Photo */}
          <div>

              <Slider
                  slidesToShow={1}
                  dots={true}
                  autoplaySpeed={3000}
                  speed={2000}
                  autoplay={true}
              >



                  {
                      singlePost.postImage.map(
                          (singlePostUrl,index)=>{
                              return(
                                  <div key={index}>
                                      {/* TODO - Fix Image with NEXT Image */}
                                      <img className={"h-[30rem] mx-auto"} src={`${singlePostUrl}`} alt={"Post Image"}/>
                                  </div>
                              )
                          }
                      )
                  }




              </Slider>



          </div>


          {/* Description */}
          <div>

              <h1 className={"text-3xl underline underline-offset-4 mb-3"}>Description</h1>
              <p className={"text-justify mx-6"}>
                  {singlePost.productDesc}
              </p>

          </div>


          {/* Creation Date */}
          <div>
              <p>25/Nov/2022 -- 5:30PM</p>
          </div>

      </div>

  );
}