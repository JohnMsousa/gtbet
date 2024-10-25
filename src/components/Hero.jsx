import Slider from "react-slick";
import Button from "./Button";
import homeSlide1 from "../assets/imgSlider/homeSlide1.jpeg";
import homeSlide2 from "../assets/imgSlider/homeSlide2.jpeg";
import homeSlide3 from "../assets/imgSlider/homeSlide3.jpeg";
import homeSlide4 from "../assets/imgSlider/homeSlide4.jpeg";

// Setas de navegação
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      image: homeSlide1,
      title: "Queima de stoque Fila ",
      description: "10% off",
      link: "/produto/HomeSlide1",
    },
    {
      image: homeSlide2,
      title: "Queima de stoque Puma ",
      description: "10% off",
      link: "/produto/HomeSlide2",
    },
    {
      image: homeSlide3,
      title: "Queima de stoque Adidas ",
      description: "10% off",
      link: "/produto/HomeSlide3",
    },
    {
      image: homeSlide4,
      title: "Queima de stoque Nike ",
      description: "10% off",
      link: "/produto/HomeSlide4",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 mx-full">
      <div className="container mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-[500px]">
              {/* Imagem de fundo */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Conteúdo sobreposto */}
              <div className="absolute inset-0 bg-black bg-opacity-40 p-10">
                <h3 className="text-yellow-300 text-3xl font-bold mb-4">
                  {slide.title}
                </h3>
                <p className="text-[#c92072fd] text-2xl font-bold mb-6">
                  {slide.description}
                </p>
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <Button text="Ver Ofertas" className="mt-4" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
