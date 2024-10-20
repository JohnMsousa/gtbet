import React from "react";
import InfluencerImage from "../assets/embaixador.jpg"; // Importe a imagem corretamente

const Sobre = () => {
  return (
    <div className="flex flex-col items-center bg-white p-6">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sobre nós</h1>

      {/* Foto do influenciador */}
      <img
        src={InfluencerImage}
        alt="Influenciador"
        className=" shadow-lg mb-4"
      />

      {/* Nome do influenciador e mensagem */}
      <h2 className="text-xl font-bold mb-2">Gusttavo Lima</h2>
      <p className="text-center text-lg text-gray-700 mb-4">
        A <span className="font-bold text-green-600">GTBet</span> é confiável e
        segura. Confie na escolha do{" "}
        <span className="font-semibold text-blue-600">Embaixador</span>!
      </p>

      {/* Botão de chamada para ação */}
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition-all">
        Junte-se Agora!
      </button>
    </div>
  );
};

export default Sobre;
