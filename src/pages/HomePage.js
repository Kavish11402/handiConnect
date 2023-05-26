import SideBar from "@/Components/HomeComponent/SideBar";
import HomeBody from "@/Components/HomeComponent/HomeBody";
import AddNewPost from "@/Components/Helper Components/AddNewPost";
import {getPostsFromDB} from "@/API_Services/apiServices";
import CreateAnnouncement from "@/Components/Helper Components/CreateAnnouncement";
import EditProfile from "@/Components/Helper Components/EditProfile";
import ViewProfile from "@/Components/Helper Components/DialogBox Components/ViewProfile";
import ViewPost from "@/Components/Helper Components/DialogBox Components/ViewPost";


export default function HomePage({allJsonData})
{
  return(
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

        {/*View Profile*/}
        <ViewProfile/>

        {/*View Post*/}
        <ViewPost/>

    </div>
  );
}
export async function getServerSideProps(context) {
    const data = await getPostsFromDB();
    data.reverse()

    return {
        props: { allJsonData: data }, // will be passed to the page component as props
    };
}