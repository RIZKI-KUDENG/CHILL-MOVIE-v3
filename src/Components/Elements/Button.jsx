// Kita buat 2 varian: 'primary' untuk tombol solid, 'secondary' untuk tombol dengan border
const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  ...props // Untuk props lain seperti disabled, dll.
}) => {
  // Atur style dasar
  let baseStyle = "py-3 rounded-full w-full transition-colors font-normal flex items-center justify-center gap-2";

  // Tambahkan style berdasarkan varian
  if (variant === "primary") {
    baseStyle += " bg-[#E7E3FC3B] hover:bg-opacity-80";
  } else if (variant === "secondary") {
    baseStyle += " bg-transparent border border-[#E7E3FC3B] hover:bg-[#E7E3FC3B] hover:bg-opacity-20";
  }
  
  return (
    <button
      type={type}
      className={`${baseStyle} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;