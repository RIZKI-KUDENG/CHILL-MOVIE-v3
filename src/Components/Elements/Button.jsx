// Kita buat 2 varian: 'primary' untuk tombol solid, 'secondary' untuk tombol dengan border
const Button = ({
  children,
  type = "button",
  variant = "",
  onClick,
  className = "",
  ...props
}) => {

  if (variant === "primary") {
    className += "py-3 rounded-full w-full transition-colors font-normal flex items-center justify-center gap-2 bg-[#E7E3FC3B] hover:bg-[#E7E3FC3B] hover:bg-opacity-80";
  } else if (variant === "secondary") {
    className += "py-3 rounded-full w-full transition-colors font-normal flex items-center justify-center gap-2 bg-transparent border border-[#E7E3FC3B] hover:bg-[#E7E3FC3B] hover:bg-opacity-20";
  }
  
  return (
    <button
      type={type}
      className={`${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;