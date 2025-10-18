import { useAuthStore } from "../store/authStore";
const HomePage = () => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };
const username = JSON.parse(localStorage.getItem("user")).username
  return (
    <div className="h-screen w-full bg-gray-800 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Selamat Datang, {username}!</h1>
      <p className="mt-2">Anda berhasil masuk ke halaman utama.</p>
      <button
        onClick={handleLogout}
        className="mt-8 px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
