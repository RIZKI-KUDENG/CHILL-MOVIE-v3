import FooterLinks from "./FooterLinks";
import HelpsFooter from "./HelpsFooter";
import { useDropdown } from "../../../store/useDropdown";
import { useState } from "react";
const Footer = () => {
const { isOpen, onOpen, onClose } = useDropdown();
const [helpOpen, setHelpOpen] = useState(false);
const handleOpenHelp = () => {
    if (helpOpen) {
        setHelpOpen(false);
    } else {
        setHelpOpen(true);
    }
}
  const handleOpen = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }

  return (
    <footer className="py-5 md:py-10 mx-8 md:mx-14">
      <div className="flex flex-col gap-5 md:flex-row justify-between">
        <div className="flex flex-col md:gap-3">
          <div className="flex gap-1 items-center">
            <img src="/src/assets/image/logo.png" alt="" className="w-7 h-7" />
            <h1 className="font-londrina text-2xl md:text-4xl ">CHILL</h1>
          </div>
          <div>
            <p className="text-[#C1C2C4]">
              &#169; 2023 CHILL | All rights reserved
            </p>
          </div>
        </div>
        <FooterLinks onclick={handleOpen} dropdown={isOpen} />
        <HelpsFooter onclickHelp={handleOpenHelp} dropdownHelp={helpOpen} />
      </div>
    </footer>
  );
};
export default Footer;
