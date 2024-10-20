import Card from "./Card";

// Importando as imagens do assets
import tigrinhoImage from "../assets/tigrinho.jpg";
import touroImage from "../assets/touro.jpg";
import coelhoImage from "../assets/coelho.jpg";
import dragaoImage from "../assets/dragao.jpg";

const services = [
  {
    title: "Fortune Tiger",
    description: "Jogo emocionante com grandes chances de vitória!",
    image: tigrinhoImage,
  },
  {
    title: "Fortune Ox",
    description: "Domine a força do touro e conquiste grandes prêmios!",
    image: touroImage,
  },
  {
    title: "Fortune Rabbit",
    description: "Siga o coelho veloz e descubra tesouros escondidos!",
    image: coelhoImage,
  },
  {
    title: "Fortune Dragon",
    description: "Acorde o dragão e voe em direção a prêmios épicos!",
    image: dragaoImage,
  },
];

const Services = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Nossos Jogos</h3>
        <div className="flex flex-wrap justify-around gap-4 p-1 ">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
