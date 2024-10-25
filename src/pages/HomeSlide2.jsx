import homeSlide2 from "../assets/imgSlider/homeSlide2.jpeg"; // Atualize o caminho conforme necessário

const HomeSlide2 = () => {
  const product = {
    name: "Tênis Casual Azul",
    description:
      "Com design minimalista e conforto incomparável, este tênis azul é ideal para o dia a dia. Feito com material respirável e solado emborrachado, garante estilo e praticidade.",
    price: "R$ 199,90",
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-1/3">
        <img
          src={homeSlide2}
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
        <button className="mt-6 px-6 py-3 bg-green-600 text-white font-medium text-lg rounded-lg hover:bg-green-700 transition duration-300">
          Comprar Agora
        </button>
      </div>
    </div>
  );
};

export default HomeSlide2;
