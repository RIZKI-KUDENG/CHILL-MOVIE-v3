const AuthLayout = ({ children, title, subtitle, background }) => {
  return (
    <main className={`h-screen w-full ${background} bg-cover bg-no-repeat bg-center flex justify-center items-center font-lato text-white p-4`}>
      <div className="w-full max-w-md bg-[#181A1CD6] flex flex-col rounded-2xl p-6 sm:p-8 space-y-6">
        {/* Bagian Header */}
        <div className="flex justify-center items-center gap-2">
          <img
            src="/src/assets/image/logo.png"
            alt="Logo Chill"
            className="w-10 h-9 sm:w-12 sm:h-11"
          />
          <h5 className="text-center text-4xl sm:text-5xl text-white font-londrina">
            CHILL
          </h5>
        </div>

        {/* Bagian Judul */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
          <p className="text-sm sm:text-base text-gray-300 mt-1">
            {subtitle}
          </p>
        </div>

        {/* Konten (Form) akan dirender di sini */}
        {children}
      </div>
    </main>
  );
};
export default AuthLayout;