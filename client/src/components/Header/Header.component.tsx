import "./Header.component.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-main-container">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <button type="button">Acceuil</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
