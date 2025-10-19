import { useDropdown } from "../../store/useDropdown";
import { useAuthStore } from "../../store/authStore";
import { useEffect } from "react";
const AvatarDropdown = () => {
  const { isOpen, onOpen, onClose } = useDropdown();
  const handleOpen = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const { logout } = useAuthStore();
  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };
  return (
    <div className=" flex-1 flex gap-2 items-center justify-end">
      <img
        src="/src/assets/homeimage/avatar.png"
        className="h-7 w-7 rounded-full"
        alt=""
      />
      <img
        src="/src/assets/homeimage/toggleavatar.png"
        className="h-5 w-5 cursor-pointer"
        alt=""
        onClick={handleOpen}
      />
      <div className={`relative z-10 ${isOpen ? "block" : "hidden"}`}>
        <ul className="absolute top-3 right-0 bg-[#181A1C] w-35 md:w-35 md:h-35 flex flex-col gap-3 md:gap-6">
          <li className="flex items-center text-sm md:text-lg text-[#3254FF]">
            <img
              src="/src/assets/homeimage/akun.png"
              alt=""
              className="w-3 md:w-4 h-3 md:h-4"
            />
            <a href="#">Profil Saya</a>
          </li>
          <li className="flex items-center text-sm md:text-lg">
            <img
              src="/src/assets/homeimage/star.png"
              alt=""
              className="w-3 md:w-4 h-3 md:h-4"
            />
            <a href="#">Ubah premium</a>
          </li>
          <li
            onClick={handleLogout}
            className="flex items-center text-sm md:text-lg cursor-pointer"
          >
            <img
              src="/src/assets/homeimage/logout.png"
              alt=""
              className="w-3 md:w-4 h-3 md:h-4"
            />
            <p>Keluar</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AvatarDropdown;
