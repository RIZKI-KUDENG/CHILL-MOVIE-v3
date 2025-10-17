import AuthLayout from "../Components/Layouts/AuthLayout";
import InputField from "../Components/Fragments/InputField";
import Button from "../Components/Elements/Button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="DAFTAR"
      subtitle="Selamat Datang!"
      background="bg-[url(/src/assets/image/bgregister.jpg)]"
    >
      <form onSubmit="" className="flex flex-col space-y-4">
        <InputField
          label="Username"
          id="username"
          type="text"
          placeholder="Masukan username"
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          placeholder="Masukan password"
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          placeholder="Konfirmasi password"
        />
        <div className="flex justify-start">
          <p className="text-[#C1C2C4]">
            Sudah Punya Akun?{" "}
            <Link to="/login" className="font-bold text-white hover:underline">
              Login
            </Link>
          </p>
        </div>
        <div className="flex flex-col">
          <Button type="submit" variant="primary">
            MASUK
          </Button>
          <div className="flex items-center justify-center gap-2">
            <p className="text-center text-sm text-[#C1C2C4]">Atau</p>
          </div>
          <Button type="button" variant="secondary">
            <img
              src="/src/assets/image/google.png"
              className="w-5 h-5"
              alt="Google icon"
            />
            <p>Masuk dengan Google</p>
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
