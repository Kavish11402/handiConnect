import logoutIcon from "@/Assets/icons/logout.png"
import Image from "next/image";
import SingleFeedPost from "@/Components/SingleFeedPost";
import {deleteCookie} from "cookies-next";
import {useRouter} from "next/router";
import {useContext} from "react";
import {myglobalContext} from "@/Context/MasterContext";



export default function HomeBody()
{
    const myLocalContext = useContext(myglobalContext);
    console.log( myLocalContext.userInfo )

    function newPost()
    {
        if(myLocalContext.userInfo.userOccupation ==="Seller")
        {
            return(
                <div className={"cursor-pointer bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-5 py-2 text-2xl font-semibold rounded-3xl flex flex-row space-x-4"} onClick={ ()=>{ myLocalContext.setAddPostDialogStatus(true) } } >
                    <p className={"h-fit my-auto"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="3" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                        </svg>
                    </p>
                    <p>New Post</p>
                </div>
            )
        }
    }

    const router = useRouter();
    function handler()
    {
        deleteCookie('userState');
        router.push("/").then();
    }

    return(
        <div className={"w-[80%] max-h-screen overflow-y-scroll bg-zinc-100"}>

            {/* Top Bar */}
            <div className={"bg-white sticky z-40 top-0 left-0 right-0 flex flex-row justify-between px-5 py-2 drop-shadow-xl"}>


                {/* Search Box */}
                <div className={"w-[80%] 2xl:w-[60%]"}>

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
                                                text-zinc-600 
                                                lg:text-xl`} >

                                <button>
                                    Search
                                </button>

                            </span>

                    </div>

                </div>

                {/* New Post and Lockout Button */}
                <div className={"flex flex-col justify-center"}>
                    <div className={"h-fit flex flex-row space-x-10"}>


                        {/* New Post Button */}
                        {newPost()}


                        {/* Logout Button */}
                        <Image onClick={ (event)=>{ event.preventDefault(); handler() } } className={" cursor-pointer my-auto h-10 w-10"} src={logoutIcon} alt={"Logout Button"}/>


                    </div>
                </div>


            </div>


            {/* Feeds */}
            <div className={"p-4"}>

                <h1 className={"text-4xl font-semibold"}>
                    Feeds
                </h1>

                <div className={"px-4 py-7 space-y-10"}>

                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>
                    <SingleFeedPost/>

                </div>


            </div>


        </div>
    );
}