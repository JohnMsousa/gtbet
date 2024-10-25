const Button = ({ text }) => {
  return (
    <button className="bg-[#c92071] hover:bg-[#B0147A] text-white font-bold py-2 px-6 rounded shadow-lg hover:shadow-xl transition-all duration-300">
      {text}
    </button>
  );
};

export default Button;
