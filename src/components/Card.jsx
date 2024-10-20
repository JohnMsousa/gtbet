const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg max-w-xs">
      {/* Exibe a imagem centralizada com tamanho ajustado */}
      <img src={image} alt={title} className="w-48 h-48 object-cover" />
      <div className="p-6 text-center">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
