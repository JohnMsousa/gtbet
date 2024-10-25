import homeSlide4 from "../assets/imgSlider/HomeSlide4.jpeg"; // Atualize o caminho conforme necessário

const HomeSlide4 = () => {
  const product = {
    name: "Sapatênis Cinza de Camurça",
    description:
      "Este sapatênis cinza de camurça é a combinação ideal de conforto e estilo. Com um toque esportivo e acabamento de alta qualidade, é perfeito para ocasiões casuais que exigem um visual mais descolado.",
    price: "189,90",
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-1/3">
        <img
          src={homeSlide4}
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

export default HomeSlide4;
