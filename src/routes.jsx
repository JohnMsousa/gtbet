import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Services from "./components/Services";

// Importar as páginas
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import ProdutoTigrinho from "./pages/ProdutoTigrinho";
import ProdutoInfluencer from "./pages/ProdutoInfluencer";
import ProdutoCoelho from "./pages/ProdutoCoelho";
import ProdutoDragao from "./pages/ProdutoDragao";

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
      <Route path="/produto/tigrinho" element={<ProdutoTigrinho />} />
      <Route path="/produto/influencer" element={<ProdutoInfluencer />} />
      <Route path="/produto/coelho" element={<ProdutoCoelho />} />
      <Route path="/produto/dragao" element={<ProdutoDragao />} />
    </Routes>
  );
}

export default RoutesConfig;
