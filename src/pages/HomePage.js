import SideBar from "@/Components/HomeComponent/SideBar";
import HomeBody from "@/Components/HomeComponent/HomeBody";
import AddNewPost from "@/Components/Helper Components/DialogBox Components/AddNewPost";
import {getPostsFromDB} from "@/API_Services/apiServices";
import CreateAnnouncement from "@/Components/Helper Components/DialogBox Components/CreateAnnouncement";
import EditProfile from "@/Components/Helper Components/DialogBox Components/EditProfile";
import ViewProfile from "@/Components/Helper Components/DialogBox Components/ViewProfile";
import ViewPost from "@/Components/Helper Components/DialogBox Components/ViewPost";
import Head from "next/head";
import EditPost from "@/Components/Helper Components/DialogBox Components/EditPost";


export default function HomePage({allJsonData})
{
  return(
      <>
          <Head>
            <title>Handi Connect | Dashboard</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="apple-touch-icon" sizes="180x180" href="/Assets/Favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/Assets/Favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/Assets/Favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/Assets/Favicon/site.webmanifest"/>

          </Head>


          <div className={"flex flex-row max-h-screen"}>

              {/* SideBar */}
              <SideBar/>


              {/* Body */}
              <HomeBody allPost={allJsonData}/>

              {/* Add New Post Dialog box */}
              <AddNewPost/>

              {/* Create Announcement Dialog box */}
              <CreateAnnouncement/>

              {/* Edit Profile Dialog box */}
              <EditProfile/>

              {/* Edit Post Dialog box */}
              <EditPost/>

              {/*View Profile*/}
              <ViewProfile/>

              {/*View Post*/}
              <ViewPost/>


          </div>

    </>






  );
}
export async function getServerSideProps(context) {
    const data = await getPostsFromDB();
    data.reverse()

    return {
        props: { allJsonData: data }, // will be passed to the page component as props
    };
}