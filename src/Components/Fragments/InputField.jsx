const InputField = ({ label, id, type, placeholder, value, onChange, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-gray-200">
        {label}
      </label>
      <input
        id={id}
        name={id} 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-full border border-[#E7E3FC3B] bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        {...props}
      />
    </div>
  );
};

export default InputField;