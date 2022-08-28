import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Movie Catalog
      </Link>
      <Link className="favorites" to="/favorites">
        Favoritos
      </Link>
    </header>
  );
}

export default Header;
