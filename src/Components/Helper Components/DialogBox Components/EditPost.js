import {useContext, useRef} from "react";
import {myGlobalContext} from "@/Context/MasterContext";
import {useRouter} from "next/router";
import {addCommentToPost, editPost} from "@/API_Services/apiServices";
import {Dialog, Disclosure} from "@headlessui/react";
import Slider from "react-slick";
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import {ThreeDots} from "react-loader-spinner";

export default function EditPost()
{


    const router = useRouter()
    const { userInfo , editPostDialogStatus , setEditPostDialogStatus , viewPostData , uploadLoading , setUploadLoading} = useContext(myGlobalContext);

    const pName = useRef()
    const pDescription = useRef()
    const pPrice = useRef()
    const pAddress = useRef()




    function formHandler()
    {
        setUploadLoading(true)

        let productName = viewPostData.productName ;
        let productDesc = viewPostData.productDesc ;
        let address = viewPostData.address ;
        let productPrice = viewPostData.productPrice ;


        if( pName.current.value !== '' )
            productName = pName.current.value;

        if( pDescription.current.value !== '' )
            productDesc = pDescription.current.value;

        if( pAddress.current.value !== '' )
            address = pAddress.current.value;

        if( pPrice.current.value !== '' )
            productPrice = pPrice.current.value;


        editPost( viewPostData._id , {productDesc,address,productPrice,productName} , setUploadLoading , setEditPostDialogStatus , router )


    }

    return(
        <Dialog open={ editPostDialogStatus } onClose={ () => setEditPostDialogStatus(false) } className="relative z-40">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

            <div className="fixed inset-0 flex items-center justify-center p-8">


                <div className={"w-1/2 rounded-xl bg-white"}>



                    {


                        uploadLoading?
                            <div>

                                <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Create New Post</header>

                                <div className={"py-5 px-8 h-96 flex flex-col justify-center"}>

                                    <div className={"h-fit w-fit mx-auto"}>
                                        <ThreeDots
                                            height={"140"}
                                            width={"140"}
                                            radius={"9"}
                                            color={"#ee24ff"}
                                            ariaLabel={"three-dots-loading"}
                                            wrapperStyle={{}}
                                            wrapperClassName={""}
                                            visible={true}
                                        />
                                    </div>
                                    <h1 className={"mx-auto w-fit h-fit text-2xl font-bold"}>Uploading Please Wait</h1>

                                </div>


                            </div>
                            :
                            <form onSubmit={ (event)=>{ event.preventDefault(); formHandler(); } } >
                                {/*Header*/}
                                <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Edit Post</header>

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
                                                                <img className={"h-[15rem] mx-auto"} src={`${singlePostUrl}`} alt={"Post Image"}/>
                                                            </div>
                                                        )
                                                    }
                                                )
                                            }

                                        </Slider>



                                    </div>



                                    <div className={"space-y-5"}>
                                        {/* Title / price */}
                                        <div className={"flex flex-row justify-between"}>

                                            {/*<h1 className={"text-3xl underline underline-offset-4 mb-3"}>Title</h1>*/}
                                            <div className={"w-[60%]"}>
                                                <p className={"mb-2 text-md font-bold"}>Product Name</p>
                                                <input ref={pName} type={"text"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="Title of Product" />
                                            </div>

                                            <div className={"flex flex-col justify-center"}>
                                                <p className={"text-xl font-bold"}>
                                                    ₨.
                                                </p>
                                                <input ref={pPrice} type={"number"}  className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="Price of Product" />
                                            </div>


                                        </div>


                                        {/*Description*/}
                                        <div>
                                            <p className={"mb-2 text-md font-bold"}>Edit Description</p>
                                            <textarea ref={pDescription} rows={4} className="resize-none w-full rounded-xl px-2 border-2 border-black active:border-indigo-500 focus:shadow-md" placeholder="Description of Product"/>
                                        </div>

                                        {/*Address*/}
                                        <div>
                                            <p className={"mb-2 text-md font-bold"}>Address</p>
                                            <textarea ref={pAddress} rows={3} className="resize-none w-full rounded-xl px-2 border-2 border-black active:border-indigo-500 focus:shadow-md" placeholder="Address"/>
                                        </div>
                                    </div>



                                </main>



                                <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                                    <button
                                        className={"bg-red-600 transition-all ease-in hover:bg-red-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"}
                                        onClick={()=>{setEditPostDialogStatus(false)}}
                                    >
                                        Close
                                    </button>

                                    <button type={"submit"} className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} >
                                        Update
                                    </button>

                                </footer>
                            </form>
                    }




                </div>
            </div>

        </Dialog>
    );
}