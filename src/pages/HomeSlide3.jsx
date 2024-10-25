import homeSlide3 from "../assets/imgSlider/HomeSlide3.jpeg"; // Atualize o caminho conforme necessário

const HomeSlide3 = () => {
  const product = {
    name: "Bota Preta de Couro",
    description:
      "Esta bota preta, de couro legítimo, combina robustez e elegância. Perfeita para o inverno, oferece conforto térmico e durabilidade em um estilo atemporal.",
    price: "189,90",
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-1/3">
        <img
          src={homeSlide3}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="ml-8">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="mt-4 text-lg text-gray-600">{product.description}</p>
        <h2 className="mt-4 text-2xl font-semibold text-green-600">
          {product.price}
        </h2>
        <button className="bg-[#c92071] hover:bg-[#B0147A] text-white font-bold py-2 px-6 rounded shadow-lg hover:shadow-xl transition-all duration-300">
          Comprar Agora
        </button>
      </div>
    </div>
  );
};

export default HomeSlide3;
