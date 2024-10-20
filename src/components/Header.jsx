import { Link } from "react-router-dom";

const Header = () => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" onClick={handleHomeClick}>
          <h1 className="text-3xl font-bold">GTBet</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
