import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h2 className="text-2xl font-bold">Digital Store</h2>
            <p className="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            {/* Ícones de Redes Sociais */}
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Informação */}
          <div>
            <h3 className="text-xl font-bold">Informação</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Sobre Drip Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Segurança
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Trabalhe conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Meus Pedidos
                </a>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-xl font-bold">Categorias</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Calças
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Bonés
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Headphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tênis
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold">Contato</h3>
            <p className="mt-4 text-gray-400">
              Av. Santos Dumont, 1510 - 1 andar
            </p>
            <p className="text-gray-400">Aldeota, Fortaleza - CE, 60150-161</p>
            <p className="text-gray-400 mt-4">(85) 3051-3411</p>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400">© 2022 Digital College</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
