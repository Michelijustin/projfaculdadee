import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";
import CadastrarServico from "./pages/CadastrarServico";
import Servicos from "./pages/Servicos";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/cadastrar" element={<CadastrarServico />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </Router>
  );
}

export default App;


