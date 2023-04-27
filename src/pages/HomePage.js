import SideBar from "@/Components/HomeComponent/SideBar";
import HomeBody from "@/Components/HomeComponent/HomeBody";
import AddNewPost from "@/Components/Helper Components/AddNewPost";
import {getPostsFromDB} from "@/API_Services/apiServices";


export default function HomePage({allJsonData})
{
  return(
    <div className={"flex flex-row max-h-screen"}>

        {/* SideBar */}
        <SideBar/>

        {/* Body */}
        <HomeBody allPost={allJsonData}/>

        {/* Add New Post */}
        <AddNewPost/>

    </div>
  );
}
export async function getServerSideProps(context) {
    const data = await getPostsFromDB();

    return {
        props: { allJsonData: data }, // will be passed to the page component as props
    };
}