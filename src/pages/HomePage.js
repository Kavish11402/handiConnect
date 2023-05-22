import SideBar from "@/Components/HomeComponent/SideBar";
import HomeBody from "@/Components/HomeComponent/HomeBody";
import AddNewPost from "@/Components/Helper Components/AddNewPost";
import {getPostsFromDB} from "@/API_Services/apiServices";
import CreateAnnouncement from "@/Components/Helper Components/CreateAnnouncement";
import EditProfile from "@/Components/Helper Components/EditProfile";


export default function HomePage({allJsonData})
{
  return(
    <div className={"flex flex-row max-h-screen"}>

        {/* SideBar */}
        <SideBar/>

        {console.log(allJsonData)}

        {/* Body */}
        <HomeBody allPost={allJsonData}/>

        {/* Add New Post Dialog box */}
        <AddNewPost/>

        {/* Create Announcement Dialog box */}
        <CreateAnnouncement/>

        {/* Edit Profile Dialog box */}
        <EditProfile/>

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