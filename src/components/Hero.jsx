import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo à GTBet!</h2>
        <p className="text-lg mb-6">
          A melhor plataforma para apostas esportivas. Aumente suas chances de
          ganhar hoje mesmo!
        </p>
        <Button text="Comece agora" />
      </div>
    </section>
  );
};

export default Hero;
