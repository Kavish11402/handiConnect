import profilePhoto from "@/Assets/icons/man.png"
import postBG from "@/Assets/postPlaceholder.jpg"

import Image from "next/image";

export default function SingleFeedPost()
{
  return(

      <div className={"bg-white p-5 rounded-2xl space-y-5 drop-shadow-2xl"}>

          {/* Profile */}
          <div className={"flex flex-row space-x-5"}>

              {/* Photo */}
              <div className={"border-2 border-black rounded-full h-fit w-fit overflow-clip pt-2 px-2"}>
                  <Image className={"w-16 h-16"} src={profilePhoto} alt={"Profile photo"}/>
              </div>

              {/* Name , Location */}
              <div className={"flex flex-col justify-center"}>
                  <h1 className={"text-2xl"}>Kavish Mathur</h1>
                  <h2 className={"text-zinc-500"}>Lucknow, India</h2>
              </div>

          </div>


          {/* Post Photo */}
          <div>
              <Image className={"h-96"} src={postBG} alt={"Post Image"}/>
          </div>


          {/* Description */}
          <div>

              <h1 className={"text-3xl underline underline-offset-4 mb-3"}>Description</h1>
              <p className={"text-justify mx-6"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus
                  in mollis nunc sed. Eu consequat ac felis donec et odio pellentesque. In
                  mollis nunc sed id semper risus in hendrerit. Nibh sed pulvinar proin
                  gravida hendrerit lectus. Dui faucibus in ornare quam. Nullam vehicula
                  ipsum a arcu cursus. Fringilla est ullamcorper eget nulla facilisi. Nec
                  feugiat in fermentum posuere urna nec tincidunt praesent semper. Consectetur
                  adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Lacus
                  vestibulum sed arcu non odio euismod lacinia at. Arcu ac tortor dignissim
                  convallis aenean et tortor at risus. Quisque non tellus orci ac. Venenatis cras
                  sed felis eget velit aliquet sagittis id. Placerat duis ultricies lacus sed turpis
                  tincidunt. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Non diam
                  phasellus vestibulum lorem sed.
              </p>

          </div>


          {/* Creation Date */}
          <div>
              <p>25/Nov/2022 -- 5:30PM</p>
          </div>

      </div>

  );
}