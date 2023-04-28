import profilePhoto from "@/Assets/icons/man.png"




import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SingleFeedPost({ userName , userLocation , postImageURL , desc })
{
  return(

      <div className={"bg-white p-5 rounded-2xl space-y-5 drop-shadow-2xl"}>

          {/* Profile */}
          <div className={"flex flex-row space-x-5"}>

              {/* Photo */}
              <div className={"border-2 border-black rounded-full h-fit w-fit overflow-clip pt-2 px-2"}>
                  <Image className={"w-16 h-16"} src={profilePhoto} alt={"Profile photo"} width={100} height={100}/>
              </div>

              {/* Name , Location */}
              <div className={"flex flex-col justify-center"}>
                  <h1 className={"text-2xl"}>{userName}</h1>
                  <h2 className={"text-zinc-500"}>{userLocation}</h2>
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



                  <div>
                      <img className={"h-[36rem] mx-auto"} src={`${postImageURL}`} alt={"Post Image"}/>
                  </div>

                  <div>
                      <img className={"h-[36rem] mx-auto"} src={`${postImageURL}`} alt={"Post Image"}/>
                  </div>

                  <div>
                      <img className={"h-[36rem] mx-auto"} src={`${postImageURL}`} alt={"Post Image"}/>
                  </div>

                  <div>
                      <img className={"h-[36rem] mx-auto"} src={`${postImageURL}`} alt={"Post Image"}/>
                  </div>



              </Slider>



          </div>


          {/* Description */}
          <div>

              <h1 className={"text-3xl underline underline-offset-4 mb-3"}>Description</h1>
              <p className={"text-justify mx-6"}>
                  {desc}
              </p>

          </div>


          {/* Creation Date */}
          <div>
              <p>25/Nov/2022 -- 5:30PM</p>
          </div>

      </div>

  );
}