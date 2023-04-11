import SideBar from "@/Components/HomeComponent/SideBar";
import HomeBody from "@/Components/HomeComponent/HomeBody";
import AddNewPost from "@/Components/Helper Components/AddNewPost";


export default function HomePage()
{
  return(
    <div className={"flex flex-row max-h-screen"}>

        {/* SideBar */}
        <SideBar/>

        {/* Body */}
        <HomeBody/>

        {/* Add New Post */}
        <AddNewPost/>

    </div>
  );
}