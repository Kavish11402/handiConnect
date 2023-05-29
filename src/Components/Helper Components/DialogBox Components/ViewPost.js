import {useContext, useRef} from "react";
import {myGlobalContext} from "@/Context/MasterContext";
import {useRouter} from "next/router";
import {addCommentToPost} from "@/API_Services/apiServices";
import {Dialog, Disclosure} from "@headlessui/react";
import Slider from "react-slick";
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function ViewPost()
{
    const router = useRouter()
    const comment = useRef("")
    const { userInfo , viewPostDialogStatus , setViewPostDialogStatus , viewPostData } = useContext(myGlobalContext);


    function addCommentHandler()
    {
        let commentObjects = viewPostData.productComments;
        commentObjects.push(JSON.stringify({ commenterName : userInfo.userName, userComment : comment.current.value }))

        addCommentToPost( commentObjects , viewPostData._id , router )
    }



    return(
        <Dialog open={ viewPostDialogStatus } onClose={ () => setViewPostDialogStatus(false) } className="relative z-40">

            <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

            <div className="fixed inset-0 flex items-center justify-center p-8">


                <div className={"w-1/2 rounded-xl bg-white"}>



                    <main className={"py-5 px-8 max-h-[52rem] overflow-y-scroll"}>






                        {/* Profile */}
                        <div className={"flex flex-row space-x-5 justify-between"}>

                            <div className={"flex flex-row space-x-5"}>
                                {/* Photo */}
                                <div className={"border-4 border-pink-500 rounded-full w-20 h-20 overflow-clip"}>
                                    <img className={""} src={viewPostData.uploaderProfileImage} alt={"Profile photo"} />
                                </div>

                                {/* Name , Location */}
                                <div className={"flex flex-col justify-center"}>
                                    <h1 className={"text-2xl"}>{viewPostData.uploaderName}</h1>
                                    <h2 className={"text-zinc-500"}>{viewPostData.uploaderLocation}</h2>
                                </div>
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
                                    viewPostData.postImage.map(
                                        (singlePostUrl,index)=>{
                                            return(
                                                <div key={index}>
                                                    {/* TODO - Fix Image with NEXT Image */}
                                                    <img className={"h-[18rem] mx-auto"} src={`${singlePostUrl}`} alt={"Post Image"}/>
                                                </div>
                                            )
                                        }
                                    )
                                }

                            </Slider>



                        </div>



                        {/* Title / price */}
                        <div className={"flex flex-row justify-between"}>

                            {/*<h1 className={"text-3xl underline underline-offset-4 mb-3"}>Title</h1>*/}
                            <p className={"text-3xl font-medium underline underline-offset-4 mb-3 w-[80%]"}>
                                {viewPostData.productName}
                            </p>

                            <div className={"flex flex-col justify-center"}>
                                <p className={"text-xl font-bold"}>
                                    ₨. {viewPostData.productPrice}
                                </p>
                            </div>


                        </div>


                        {/*Description*/}
                        <div className={"px-4 py-2 max-h-36 overflow-y-scroll "}>
                            <h2 className={"font-bold underline"}>Description:</h2>
                            <p>{viewPostData.productDesc}</p>
                        </div>

                        {/*Address*/}
                        <div className={"px-4 py-2 max-h-36 overflow-y-scroll "}>
                            <h2 className={"font-bold underline"}>Address:</h2>
                            <p>{viewPostData.address}</p>
                        </div>


                        {/*Comments*/}
                        <div className={"mt-5 space-y-3"}>


                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <div className={"flex flex-row space-x-2"}>
                                                <h1 className={"text-xl font-medium underline underline-offset-4"}>
                                                    Comments
                                                </h1>

                                                <p className={"font-medium text-lg"}>
                                                    ({ viewPostData.productComments.length })
                                                </p>
                                            </div>

                                            <ChevronUpIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>

                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">


                                            {
                                                viewPostData.productComments.length>0 &&
                                                <div className={"border-2 border-stone-400 rounded-3xl p-4  mb-4 space-y-3"}>

                                                    {
                                                        viewPostData.productComments.map(
                                                            (singleComment,index)=>{
                                                                const data = JSON.parse( singleComment )
                                                                return(
                                                                    <div
                                                                        className={"flex flex-row space-x-2 bg-zinc-200 p-3 rounded-lg"}
                                                                        key={index}
                                                                    >

                                                                        <h1 className={"text-sm font-medium underline italic"}>@{data.commenterName}</h1>

                                                                        <p className={"text-sm break-all"}>
                                                                            {data.userComment}
                                                                        </p>



                                                                    </div>
                                                                )
                                                            }
                                                        )

                                                    }

                                                </div>

                                            }


                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>









                            <div>

                                <div className={""}>
                                    <form onSubmit={ (event)=>{ event.preventDefault();  addCommentHandler() } }>
                                        <div className={"flex flex-row"}>
                                            <textarea ref={comment} rows={2} className="resize-none w-full focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-l-md" placeholder="Add Comment" required />

                                            <button className=" px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type={"submit"} >
                                                Comment
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>




                        </div>

                    </main>



                    <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                        <button
                            className={"bg-red-600 transition-all ease-in hover:bg-red-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"}
                            onClick={()=>{setViewPostDialogStatus(false)}}
                        >
                            Close
                        </button>

                    </footer>





                </div>
            </div>

        </Dialog>
    );
}