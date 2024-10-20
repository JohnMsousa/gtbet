import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

// Importar as páginas Sobre e Contato
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Home from "./pages/Home"; // Supondo que Hero e Services serão usados aqui.

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Definir as rotas aqui */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                </>
              }
            />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
