import girlImg from "../../public/Assets/Images/Girl.png"
import {useContext, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import {myGlobalContext} from "@/Context/MasterContext";


export default function Login()
{
    const myLocalContext = useContext(myGlobalContext)
    const email = useRef()
    const password = useRef()





  return(
      <div className={"min-h-screen bg-gradient-to-br from-purple-600 via-purple-600 to-blue-600 flex flex-col items-center justify-center"}>

          <div className={"shadow-2xl shadow-black/50 bg-white w-[90%] rounded-3xl shadow-2xl shadow-black/50 lg:w-fit lg:flex lg:flex-row"}>

              <div className={"rounded-l-3xl bg-purple-700 lg:flex flex-col justify-center text-white font-semibold text-lg hidden"}>

                  <div className={"flex flex-col items-center mb-3"}>
                      <Image className={"max-w-sm my-8 mx-7"} src={girlImg}  alt={"A girl img"}/>
                      <p>Hey, Enter your details to get Login</p> <p>to your account</p>
                  </div>

              </div>

              <div className={"text-white text-base  "} >

                  <p className={"my-5 py-3 w-[70%] rounded-r-full bg-purple-400 font-semibold flex text-lg "}><span className={"mx-auto"}>Welcome back </span> </p>

                  <div className={"mt-6"}>

                      <header className={"mb-7 lg:mb-10 lg:mx-16"}>
                          <p className={"text-purple-700 text-center font-bold text-3xl"}>Login your account</p>
                          <div className={"text-gray-500 font-semibold text-sm flex flex-col items-center mt-5 lg:hidden "}>
                              <p>Hey, Enter your details to get Login</p> <p>to your account</p>
                          </div>
                      </header>

                      <main>

                          <form onSubmit={ (event)=>{ event.preventDefault(); myLocalContext.userLogin(email.current.value, password.current.value).then() }  } >

                              {/*Email*/}
                              <div className={"relative flex flex-col mx-5 lg:mx-7 mb-8 text-black "}>

                                    <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>

                                    </span>

                                    <input required className={"pl-12 h-10 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-purple-500 focus:ring-2 focus:ring-purple-700"} ref={email} type="email" placeholder={"Email"}/>
                              </div>

                              {/*Password*/}
                              <div className={"relative flex flex-col mx-5 lg:mx-7 mb-8 lg:mb-12 text-black"}>

                                    <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>

                                        </svg>
                                    </span>

                                    <input required className={"pl-12 h-10 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-purple-500 focus:ring-2 focus:ring-purple-700"} ref={password} type="password" placeholder={"Password"}/>
                              </div>

                              <div className={"text-center"} >
                                  <button type={"submit"} className={"text-xl py-2 rounded-2xl px-12   bg-gradient-to-br from-purple-600 via-purple-600 to-blue-600 hover:bg-gradient-to-br hover:from-purple-700 hover:via-purple-700 hover:to-blue-700 transition"} >
                                      Login
                                  </button>

                              </div>

                          </form>

                          <div className={"text-center text-base lg:text-lg text-purple-700 mt-7"}>
                              <Link href="/Signup">
                                  <button className={"hover:text-black hover:font-semibold transition"}> Create Account </button>
                              </Link>
                          </div>

                      </main>


                      <footer className={"text-base lg:text-lg text-purple-700 text-center my-6"} >
                          <Link href="/ForgetPassword">
                              <button className={"px-5 hover:text-black hover:font-semibold transition border-4 border-t-0 border-l-0 border-r-0 border-b-purple-700 hover:border-b-black"} >
                                  Forgot Password
                              </button>
                          </Link>
                      </footer>

                  </div>

              </div>

          </div>

          <div className={"mt-4 text-sm text-white "}> <span className={"font-semibold"}> Copyright @HamaraWork 2022 | Private Policy </span> </div>

      </div>
  );
}