import NavLinks from "../../Elements/NavLinks";
import AvatarDropdown from "../../Elements/AvatarDropdown";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="w-full flex justify-between  items-center bg-[#181A1C] p-4 gap-5 font-lato text-white">
      <div className="flex-none flex justify-center items-center md:ml-8">
        <img src="/src/assets/image/logo.png" alt="" className=" w-7 h-7" />
        <h1 className="font-londrina md:text-4xl max-md:hidden "><Link to="/">CHILL</Link></h1>
      </div>
      <NavLinks />
      <AvatarDropdown />
    </header>
  );
};
export default Navbar;
