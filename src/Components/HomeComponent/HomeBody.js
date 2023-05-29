import logoutIcon from "@/Assets/icons/logout.png"
import Image from "next/image";
import SingleFeedPost from "@/Components/Helper Components/SingleFeedPost";
import {Tab} from "@headlessui/react";
import {deleteCookie} from "cookies-next";
import {useRouter} from "next/router";
import {useContext} from "react";
import {myGlobalContext} from "@/Context/MasterContext";




export default function HomeBody({allPost})
{
    const myLocalContext = useContext(myGlobalContext);
    console.log("home Body =>",allPost)

    function sellerOptions()
    {
        if(myLocalContext.userInfo.userOccupation ==="Seller")
        {
            return(
                <div className={"flex flex-row space-x-4"}>


                    <div className={"cursor-pointer bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all ease-linear text-white px-5 py-2 text-lg font-semibold rounded-3xl flex flex-row space-x-4"} onClick={ ()=>{ myLocalContext.setCreateAnnouncementDialogStatus(true) } } >
                        <p className={"h-fit my-auto"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/>
                            </svg>

                        </p>
                        <p>Make Announcement</p>
                    </div>


                    <div className={"cursor-pointer bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all ease-linear text-white px-5 py-2 text-2xl font-semibold rounded-3xl flex flex-row space-x-4"} onClick={ ()=>{ myLocalContext.setAddPostDialogStatus(true) } } >
                        <p className={"h-fit my-auto"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="3" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                            </svg>
                        </p>
                        <p>New Post</p>
                    </div>


                </div>
            )
        }
    }


    function buyerFeeds()
    {
        return(
            <div className={"space-y-10"}>

                {
                    allPost.map(
                        (singlePost,index)=>{

                            const state = singlePost.productLikesList.includes(myLocalContext.userInfo.uid)

                            return(
                                <SingleFeedPost
                                    key={index}
                                    singlePost={singlePost}
                                    state={state}
                                />
                            )
                        }
                    )
                }


            </div>
        )
    }

    function sellerFeeds()
    {
        return(
            <Tab.Group>

                <Tab.List className={"flex flex-row justify-center"}>

                    <div className={"flex flex-col lg:flex-row justify-center w-fit bg-amber-300/70 p-2 rounded-xl space-y-2 lg:space-y-0 lg:space-x-2 "}>

                        {/* Overview Button */}
                        <Tab className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-pink-500 outline-0 border-2 border-transparent" +
                            " ui-selected:bg-white ui-selected:shadow ui-selected:border-pink-500" +
                            " ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-pink-500"}>
                            All Posts
                        </Tab>

                        {/* Course Content Button */}
                        <Tab className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-pink-500 outline-0 border-2 border-transparent" +
                            " ui-selected:bg-white ui-selected:shadow ui-selected:border-pink-500" +
                            " ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-pink-500"}>
                            My Posts
                        </Tab>


                    </div>

                </Tab.List>

                <Tab.Panels className={"mt-10 lg:mx-16"}>

                    {/* All Posts */}
                    <Tab.Panel>
                        <div className={"space-y-10"}>

                            {
                                allPost.map(
                                    (singlePost,index)=>{

                                        const state = singlePost.productLikesList.includes(myLocalContext.userInfo.uid)

                                        return(
                                            <SingleFeedPost
                                                key={index}
                                                singlePost={singlePost}
                                                state={state}
                                            />
                                        )
                                    }
                                )
                            }


                        </div>
                    </Tab.Panel>

                    {/* My Posts */}
                    <Tab.Panel>
                        <div className={"space-y-10"}>

                            {
                                allPost.map(
                                    (singlePost,index)=>{
                                        if ( singlePost.uploaderName === myLocalContext.userInfo.userName )
                                        {
                                            const state = singlePost.productLikesList.includes(myLocalContext.userInfo.uid)
                                            return(
                                                <SingleFeedPost
                                                    key={index}
                                                    singlePost={singlePost}
                                                    state={state}
                                                />
                                            )
                                        }
                                    }
                                )
                            }

                        </div>
                    </Tab.Panel>


                </Tab.Panels>

            </Tab.Group>
        )
    }


    const router = useRouter();
    function handler()
    {
        deleteCookie('userState');
        router.push("/").then();
        localStorage.removeItem("userCredential")
    }

    return(
        <div className={"w-[80%] max-h-screen overflow-y-scroll bg-zinc-100"}>

            {/* Top Bar */}
            <div className={"bg-white sticky z-40 top-0 left-0 right-0 flex flex-row justify-end px-5 py-2 drop-shadow-xl"}>


                {/* Search Box */}
                {/*<div className={"w-[80%] 2xl:w-[60%]"}>

                    <div className={"relative my-2 drop-shadow-lg"}>

                            <span className={"absolute inset-y-0 flex items-center pl-3"} >

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>

                            </span>

                        <input className={"w-full h-12 pl-12 pr-24 rounded-3xl transition-all border-2 focus:border-secondary-dark focus:outline-0 focus:ring-0 ease-in"} type={"text"} placeholder={"Search"} />

                        <span className={`  mr-[2.46px]
                                                text-white
                                                absolute 
                                                right-0 
                                                inset-y-[2.46px]
                                                flex 
                                                items-center 
                                                px-4 
                                                bg-purple-500
                                                hover:bg-purple-400 
                                                transition-all 
                                                ease-in-out 
                                                rounded-r-3xl 
                                                py-2 
                                                text-center 
                                                text-base 
                                                font-semibold
                                                lg:text-xl`} >

                                <button>
                                    Search
                                </button>

                            </span>

                    </div>

                </div>*/}

                {/* New Post and Lockout Button */}
                <div className={"flex flex-col justify-center"}>
                    <div className={"h-fit flex flex-row space-x-10"}>



                        {/* New Post Button */}
                        {sellerOptions()}


                        {/* Logout Button */}
                        <Image onClick={ (event)=>{ event.preventDefault(); handler() } } className={" cursor-pointer my-auto h-10 w-10"} src={logoutIcon} alt={"Logout Button"}/>


                    </div>
                </div>


            </div>


            {/* Feeds */}
            <div className={"p-4"}>


                <div className={"px-4 pt-2 pb-7"}>

                    { myLocalContext.userInfo.userOccupation==="Buyer"? buyerFeeds() : sellerFeeds() }

                </div>


            </div>


        </div>
    );
}