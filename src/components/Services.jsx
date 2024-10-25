import Card from "./Card";

// Importando as imagens do assets
import producImage1 from "../assets/imgProdutos/produto1.jpeg";
import producImage2 from "../assets/imgProdutos/produto2.jpeg";
import producImage3 from "../assets/imgProdutos/produto3.jpeg";
import producImage4 from "../assets/imgProdutos/produto4.jpeg";
import producImage5 from "../assets/imgProdutos/produto5.jpeg";

const services = [
  {
    title: "Nike Air Max 270",
    description:
      "Conforto e estilo com amortecimento visível em cada passo. Ideal para o dia a dia e treinos leves.",
    image: producImage1,
  },
  {
    title: "Adidas Ultraboost",
    description:
      "Máxima performance e retorno de energia. Perfeito para quem busca conforto em corridas longas.",
    image: producImage2,
  },
  {
    title: "Puma RS-X",
    description:
      "Design futurista com tecnologia de amortecimento para um estilo urbano moderno.",
    image: producImage3,
  },
  {
    title: "Asics Gel-Kayano 28",
    description:
      "Estabilidade e suporte para corridas de alta performance. Experimente o conforto Gel.",
    image: producImage4,
  },
  {
    title: "New Balance 574",
    description:
      "Clássico atemporal com conforto superior. Perfeito para combinar estilo casual e esportivo.",
    image: producImage5,
  },
];

const Services = () => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Produtos</h3>
        <div className="flex flex-wrap justify-around gap-4 p-1">
          {services.map((service, index) => (
            <div className="w-64">
              {" "}
              {/* Largura definida para os cards */}
              <Card
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
