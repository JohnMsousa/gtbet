import Slider from "react-slick";
import Button from "./Button";

import tigrinhoBanner from "../assets/tigrinhoBanner.jpg";
import influencerBanner from "../assets/influencerBanner.jpg";
import coelho from "../assets/coelho.jpg";
import dragao from "../assets/dragao.jpg";

// Importe os ícones de seta
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Componentes para as setas de navegação
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white"
    onClick={onClick}
  >
    <FaArrowRight size={30} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white"
    onClick={onClick}
  >
    <FaArrowLeft size={30} />
  </div>
);

const Hero = () => {
  const settings = {
    dots: true, // Exibe os indicadores (bolinhas)
    infinite: true, // Loop infinito
    speed: 500, // Velocidade de transição
    slidesToShow: 1, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantos slides rolar por vez
    autoplay: true, // Ativa autoplay
    autoplaySpeed: 5000, // Tempo entre uma transição e outra (5 segundos)
    nextArrow: <NextArrow />, // Passa o componente de seta próxima
    prevArrow: <PrevArrow />, // Passa o componente de seta anterior
  };

  return (
    <section className="bg-blue-500 text-white py-20 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo à GTBet!</h2>
        <p className="text-lg mb-6">
          A melhor plataforma para apostas esportivas. Aumente suas chances de
          ganhar hoje mesmo!
        </p>
        <Slider {...settings} className="mb-6">
          <div>
            <img src={tigrinhoBanner} alt="Slide 1" className="mx-auto" />
          </div>
          <div>
            <img src={influencerBanner} alt="Slide 2" className="mx-auto" />
          </div>
          <div>
            <img src={coelho} alt="Slide 3" className="mx-auto" />
          </div>
          <div>
            <img src={dragao} alt="Slide 4" className="mx-auto" />
          </div>
        </Slider>
        <Button text="Comece agora" />
      </div>
    </section>
  );
};

export default Hero;
