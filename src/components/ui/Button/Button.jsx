const Button = ({ children, className }) => {
  return (
    <button
      className={`font-poppins py-4 px-6 outline-none text-primary bg-blue-gradient rounded-[10px] font-[500] text-[18px] leading-[18px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
