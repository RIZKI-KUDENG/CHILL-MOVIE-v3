import { Outlet } from "react-router-dom"
import Navbar from "../Fragments/Hero/Navbar"
import Footer from "../Fragments/Footer/Index"
const MainLayout = () =>{
    return (
    <div className="font-lato bg-[#181A1C] text-white">
        <Navbar></Navbar>
        <Outlet/>
        <Footer></Footer>
    </div>
    )
}
export default MainLayout;