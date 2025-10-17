import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
function App() {
  return (
    // <main className="h-screen w-full bg-[url(/src/assets/image/bglogin.jpg)] bg-cover bg-no-repeat bg-center flex justify-center items-center font-lato text-white p-4">
    //   <div className="w-full max-w-md bg-[#181A1CD6] flex flex-col rounded-2xl p-6 sm:p-8 space-y-6">
    //     <div className="flex justify-center items-center gap-2">
    //       <img
    //         src="/src/assets/image/logo.png"
    //         alt="Logo Chill"
    //         className="w-10 h-9 sm:w-12 sm:h-11"
    //       />
    //       <h5 className="text-center text-4xl sm:text-5xl text-white font-londrina">
    //         CHILL
    //       </h5>
    //     </div>
    //     <div className="text-center">
    //       <h3 className="text-2xl sm:text-3xl font-bold">MASUK</h3>
    //       <p className="text-sm sm:text-base text-gray-300 mt-1">
    //         Selamat Datang Kembali!
    //       </p>
    //     </div>
    //     <form action="#" className="flex flex-col space-y-4">
    //       <div className="flex flex-col gap-2">
    //         <label htmlFor="username" className="text-sm text-gray-200">
    //           Username
    //         </label>
    //         <input
    //           id="username"
    //           type="text"
    //           placeholder="Masukan username"
    //           className="w-full p-3 rounded-full border border-[#E7E3FC3B] bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
    //         />
    //       </div>
    //       <div className="flex flex-col gap-2">
    //         <label htmlFor="password" className="text-sm text-gray-200">
    //           Password
    //         </label>
    //         <input
    //           id="password"
    //           type="password"
    //           placeholder="Masukan password"
    //           className="w-full p-3 rounded-full border border-[#E7E3FC3B] bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
    //         />
    //       </div>
    //       <div className="flex justify-between items-center text-sm gap-2 sm:gap-4 mt-2">
    //         <p className="text-[#C1C2C4]">
    //           Belum Punya Akun?{" "}
    //           <a href="#" className="font-bold text-white hover:underline">
    //             Daftar
    //           </a>
    //         </p>
    //         <a href="#" className="hover:underline">
    //           Lupa kata sandi?
    //         </a>
    //       </div>
    //       <div className="flex flex-col gap-1">
    //         <Button type="submit" variant="primary" className="cursor-pointer">
    //           MASUK
    //         </Button>
    //         <div className="flex items-center justify-center gap-2">
    //           <p className="text-center text-sm text-[#C1C2C4]">Atau</p>
    //         </div>
    //         <Button type="button" variant="secondary" className="cursor-pointer">
    //           {" "}
    //           <img
    //             src="/src/assets/image/google.png"
    //             className="w-5 h-5"
    //             alt=""
    //           />
    //           <p className="font-normal">Masuk dengan Google</p>
    //         </Button>
    //       </div>
    //     </form>
    //   </div>
    // </main>
    // <LoginPage />
    <RegisterPage />
  );
}

export default App;
