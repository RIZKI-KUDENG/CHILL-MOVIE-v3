import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";
const HomePage = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  const handleLogout = () => {
    logout();
  };
  if (!user) {
    return null;
  }
  return (
    <div className="h-screen w-full bg-gray-800 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Selamat Datang, {user.username}!</h1>
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
