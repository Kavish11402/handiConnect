import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Menu, Transition} from "@headlessui/react";
import {Fragment, useContext} from "react";
import {deletePost, PostLikesHandler} from "@/API_Services/apiServices";
import {useRouter} from "next/router";
import {myGlobalContext} from "@/Context/MasterContext";

export default function SingleFeedPost({ singlePost , state })
{

    const router = useRouter()
    const myLocalContext = useContext(myGlobalContext);





    console.log("Single Post =>",singlePost)

    /*function editPostHandler()
    {
        console.log("Edit Post Activated")
    }*/

    function deletePostHandler(postID)
    {
        deletePost(postID,router)
    }

    function addLikeHandler()
    {
        const likeList = singlePost.productLikesList;
        likeList.push(myLocalContext.userInfo.uid)
        PostLikesHandler( singlePost._id , likeList , router )
    }

    function removeLikeHandler()
    {
        const likeList = singlePost.productLikesList.filter( item => item !== myLocalContext.userInfo.uid )
        console.log(likeList)
        PostLikesHandler( singlePost._id , likeList , router )
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


              {


                  ( myLocalContext.userInfo.userOccupation!=="Buyer" && myLocalContext.userInfo.userName===singlePost.uploaderName )  &&
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
                                  {
                                      myLocalContext.userInfo.userName===singlePost.uploaderName&&
                                      <div>
                                          {/*<Menu.Item>
                                              <button
                                                  onClick={ ()=>{editPostHandler()} }
                                                  className={"ui-active:bg-violet-500 ui-active:text-white ui-not-active: text-violet-500 group flex w-full items-center rounded-md px-2 py-2 text-sm"}>
                                                  Edit Post
                                              </button>
                                          </Menu.Item>*/}
                                          <Menu.Item>
                                              <button
                                                  onClick={ ()=>{deletePostHandler(singlePost._id)} }
                                                  className={"ui-active:bg-red-500 ui-active:text-white ui-not-active: text-red-500 group flex w-full items-center rounded-md px-2 py-2 text-sm"}>
                                                  Delete Post
                                              </button>
                                          </Menu.Item>
                                      </div>

                                  }



                              </Menu.Items>
                          </Transition>
                      </Menu>

                  </div>


              }


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


          {/*Like / Comment / View Post Button*/}
          <div className={"flex flex-row justify-between"}>

              <div>
                  <div className={"flex flex-row space-x-14"}>

                      {
                          state?

                              <svg
                                  onClick={ ()=>{ removeLikeHandler() } }
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-10 h-10 text-red-600 cursor-pointer transition-all ease-linear"
                              >
                                  <path
                                      d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                  />
                              </svg>

                              :

                              <svg
                                  onClick={ ()=>{ addLikeHandler() } }
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-10 h-10 cursor-pointer transition-all ease-linear"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                  />
                              </svg>
                      }

                      <svg
                          onClick={ ()=>{
                              myLocalContext.setViewPostData(singlePost)
                              myLocalContext.setViewPostDialogStatus(true)
                          } }
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-10 h-10 cursor-pointer"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                          />
                      </svg>


                      <div
                          onClick={ ()=>{
                              myLocalContext.setViewPostData(singlePost)
                              myLocalContext.setViewPostDialogStatus(true)
                          } }
                          className={"flex flex-col justify-center w-fit rounded-3xl px-5 py-1 bg-stone-400 cursor-pointer hover:bg-stone-300 transition-all ease-linear"}>
                          <p className={"text-md font-semibold"}>View Post</p>
                      </div>


                  </div>

                  <div className={"flex flex-row space-x-12"}>
                      <p className={"font-medium"}>
                          { singlePost.productLikesList.length } Likes
                      </p>

                      <p className={"font-medium"}>
                          { singlePost.productComments.length } Comments
                      </p>
                  </div>
              </div>


              <div className={"flex flex-col justify-center"}>
                  <p className={"text-xl font-bold"}>
                      ₨. {singlePost.productPrice}
                  </p>
              </div>


          </div>




          {/* Title */}
          <div>

              {/*<h1 className={"text-3xl underline underline-offset-4 mb-3"}>Title</h1>*/}
              <p className={"text-3xl underline underline-offset-4 mb-3"}>
                  {singlePost.productName}
              </p>

              {/*<p className={"text-justify mx-6"}>
                  {singlePost.productName}
              </p>*/}

          </div>


          {/* Creation Date */}
          <div>
              <p>25/Nov/2022 -- 5:30PM</p>
          </div>

      </div>

  );
}