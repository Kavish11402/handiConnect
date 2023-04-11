import {useRef} from "react";
import Link from "next/link";

export default function ForgetPassword()
{
    const email = useRef()
  return(
      <div className={"min-h-screen bg-ForgotPassImg bg-cover flex flex-col justify-center items-center"}>

        <div className={"drop-shadow-2xl bg-white lg:px-14  w-[90%] lg:w-1/2 rounded-3xl py-5"}>

          <header className={"mt-5 text-center"}>
            <h1 className={"font-bold text-4xl xl:text-6xl"}>Forgot Password ?</h1>
            <div className={"font-semibold text-sm lg:text-base mt-5 text-gray-500"}>
                <p> Don&apos;t Worry User you can reset</p>
                <p> your password by filling details below </p>
            </div>
          </header>

          <main>

              <form className={"mt-12 flex flex-col px-5"}>

                  {/*Email*/}
                  <div className={"relative flex flex-col mb-8"}>

                    <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>

                    </span>

                      <input className={"pl-12 h-10 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-yellow-300 focus:ring-2 focus:ring-yellow-500"} ref={email} type="email" placeholder={"Email"} required />
                  </div>

                  <button className={"mb-7 mt-4 bg-yellow-300 hover:bg-yellow-400 transition  text-lg py-2 rounded-lg "} type={"submit"} >Send Reset Link</button>

                  <Link href={"/"}>
                      <button className={"mb-3 w-full bg-blue-400 hover:bg-blue-500 transition  text-lg py-2 rounded-lg "}>Go To Login Page</button>
                  </Link>

              </form>

          </main>

        </div>

      </div>
  );
}