import {useContext} from "react";
import Link from "next/link";

export default function Profile()
{
    const auth = useContext(authContext)

  return(
      <div className={"h-screen bg-blue-400 flex items-center justify-evenly"}>

          <div className={"bg-white w-[90%] h-[90%] rounded-2xl shadow-2xl "}>

              <div className={"h-full relative flex flex-col "}>

                  <div className={"flex flex-row justify-evenly my-4 md:py-7 lg:py-12"}>
                      <p className={"bg-gradient-to-br from-purple-600 via-purple-600 to-blue-600 text-white font-bold text-4xl md:text-8xl px-8 py-6 md:px-16 md:py-12 rounded-full"}>
                          {(auth.userInfo.userName).substring(0,1)}
                      </p>
                  </div>

                  <div className={"flex flex-col h-full items-center justify-between pb-5 "}>

                      <div className={"text-3xl md:text-6xl font-bold mb-4"}>
                          User{"'"}s Credentials
                      </div>

                      <main className={"md:hidden w-full divide-y-2 divide-gray-500 mb-4 border-t-2 border-b-2 border-gray-500"}>

                          <div className={"py-3"}>
                              <div className={"font-semibold text-gray-500 text-xl underline mb-3 text-center"} >Your Unique User Id : </div>
                              <div className={"font-semibold italic text-base text-center"} >{ auth.userInfo.uid }</div>
                          </div>

                          <div className={"py-3"}>
                              <div className={"font-semibold text-gray-500 text-xl underline mb-3 text-center"} >Your Name : </div>
                              <div className={"font-semibold italic text-base text-center"} >{ auth.userInfo.userName }</div>
                          </div>

                          <div className={"py-3"}>
                              <div className={"font-semibold text-gray-500 text-xl underline mb-3 text-center"} >Your Email Id : </div>
                              <div className={"font-semibold italic text-base text-center"} >{ auth.userInfo.userEmail }</div>
                          </div>

                          <div className={"py-3"}>
                              <div className={"font-semibold text-gray-500 text-xl underline mb-3 text-center"} >Your Phone No : </div>
                              <div className={"font-semibold italic text-base text-center"} >{ auth.userInfo.userPhoneNo }</div>
                          </div>

                      </main>

                      <table className={"hidden md:block"}>
                          <tr>
                              <td className={"font-semibold text-2xl text-gray-500 lg:pr-32 md:pr-4 pb-8 underline"} >Your Unique User Id : </td>
                              <td className={"font-medium text-2xl italic pb-8"} >{ auth.userInfo.uid }</td>
                          </tr>
                          <tr>
                              <td className={"font-semibold text-2xl text-gray-500 lg:pr-32 pb-8 underline"} >Your Name : </td>
                              <td className={"font-medium text-2xl italic pb-8"} >{ auth.userInfo.userName }</td>
                          </tr>
                          <tr>
                              <td className={"font-semibold text-2xl text-gray-500 lg:pr-32 pb-8 underline"} >Your Email Id : </td>
                              <td className={"font-medium text-2xl italic pb-8"} >{ auth.userInfo.userEmail }</td>
                          </tr>
                          <tr>
                              <td className={"font-semibold text-2xl text-gray-500 lg:pr-32 underline"} >Your Phone No : </td>
                              <td className={"font-medium text-2xl italic"} >{ auth.userInfo.userPhoneNo }</td>
                          </tr>
                      </table>

                      <div className={"w-full flex flex-row justify-evenly"}>
                          <Link href={"/"}>
                              <button className="px-4 py-2 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                  Go To Home
                              </button>
                          </Link>

                          <button className=" px-4 py-2 border border-transparent text-lg    font-medium rounded-xl text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" onClick={()=>{ auth.resetPasswordFromProfile() }}>
                              Reset Password
                          </button>
                      </div>

                  </div>
              </div>

          </div>
      </div>
  );
}