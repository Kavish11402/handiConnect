import React, {useContext, useRef} from "react";
import Link from "next/link";
import {myglobalContext} from "@/Context/MasterContext";

export default function Signup()
{

    const myLocalContext = useContext(myglobalContext);
    const uName = useRef();
    const uEmail = useRef();
    const uPhoneNo = useRef();
    const uPass = useRef();
    const uOccpation = useRef();


    function formHandler(e)
    {
        e.preventDefault();
        myLocalContext.createUser( uName.current.value , uPhoneNo.current.value , uEmail.current.value , uPass.current.value , uOccpation.current.value )
    }


  return(

      <div className={"min-h-screen bg-SignInImg bg-cover flex flex-col justify-center items-center"}>

          <div className={"drop-shadow-2xl bg-white w-[90%] rounded-3xl lg:px-20 lg:w-1/2 lg:py-5"}>

              <header className={" mt-5 text-center "}>

                  <h1 className={"font-bold  text-3xl lg:text-4xl xl:text-6xl"}>User Registration</h1>

                  <div className={"font-semibold mt-5 xl:mt-10 text-gray-500 text-sm lg:text-base"}> <p>Hey, Enter your details to create</p> <p>your account</p> </div>
              </header>

              <main className={"mt-8 flex flex-col"}>

                  <form className={"flex flex-col mx-5 lg:mx-0 space-y-5 xl:space-y-8"} onSubmit={ (e)=>{ formHandler(e) }  } >

                      {/*Name*/}
                      <div className={"relative flex flex-col"}>

                            <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                                </svg>

                            </span>

                          <input className={"pl-12 h-10 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-red-300 focus:ring-2 focus:ring-red-500"} required ref={uName} type="text" placeholder={"Name"}/>
                      </div>

                      {/*Email*/}
                      <div className={"relative flex flex-col"}>

                            <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>

                            </span>

                          <input className={"pl-12 h-10 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-red-300 focus:ring-2 focus:ring-red-500"} required ref={uEmail} type="email" placeholder={"Email"}/>
                      </div>

                      {/*Phone No*/}
                      <div className={"relative flex flex-col"}>

                            <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>

                            </span>

                          <input className={"pl-12 h-10 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-red-300 focus:ring-2 focus:ring-red-500"} required ref={uPhoneNo} type="number" placeholder={"Phone No."}/>
                      </div>

                      {/*Password*/}
                      <div className={"relative flex flex-col"}>

                            <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>

                                </svg>
                            </span>

                          <input required className={"pl-12 h-10 rounded-lg border-0 ring-2 ring-gray-400 transition-all ease-linear hover:ring-red-300 focus:ring-2 focus:ring-red-500"} ref={uPass} type="password" placeholder={"Password"} />
                      </div>

                      {/* Occupation */}
                      <div className={"relative flex flex-col space-y-3 px-2"}>

                          <h2 className={"text-gray-500"}>Occupation</h2>

                          <select className={"ease-linear h-10 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-red-300 focus:ring-2 focus:ring-red-500"} ref={uOccpation} >

                              <option> Buyer </option>
                              <option> Seller </option>

                          </select>

                      </div>








                      <p className={"mt-5 xl:mt-10 xl:mt-10 text-sm lg:text-base xl:text-lg"} >Already have an account?
                          <Link href={"/Login"}>
                              <button className={"ml-2 font-bold"}>Login</button>
                          </Link>

                      </p>

                      <button className={"my-5 bg-red-300 hover:bg-red-400 transition py-2 rounded-lg "} type={"submit"} >Sign in</button>

                  </form>

              </main>

          </div>

      </div>

  );
}