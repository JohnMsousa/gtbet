import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesConfig from "./routes"; // Importa as rotas separadas

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Definir as rotas separadamente */}
          <RoutesConfig />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
