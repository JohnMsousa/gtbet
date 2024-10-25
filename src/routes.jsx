import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Services from "./components/Services";

// Importar as páginas
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

import HomeSlide4 from "./pages/HomeSlide4";
import HomeSlide3 from "./pages/HomeSlide3";
import HomeSlide2 from "./pages/HomeSlide2";
import HomeSlide1 from "./pages/HomeSlide1";

function RoutesConfig() {
  return (
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

      {/* Rotas para os produtos do carrossel */}
      <Route path="/produto/HomeSlide1" element={<HomeSlide1 />} />
      <Route path="/produto/HomeSlide2" element={<HomeSlide2 />} />
      <Route path="/produto/HomeSlide3" element={<HomeSlide3 />} />
      <Route path="/produto/HomeSlide4" element={<HomeSlide4 />} />
    </Routes>
  );
}

export default RoutesConfig;
