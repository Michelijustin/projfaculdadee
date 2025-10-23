import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Minha Comunidade</h1>
      <nav>
        <Link to="/">Sobre</Link>
        <Link to="/cadastrar">Cadastrar Serviço</Link>
        <Link to="/servicos">Serviços</Link>
      </nav>
    </header>
  );
}

export default Header;
