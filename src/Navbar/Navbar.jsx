import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-osnova">
        <div className="navbar-logo">
          <img src="manul.png" alt='logo'/>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/About"className="nav-link">О нас</Link>
          </li>
          <li>
          <Link to="/" className="nav-link">Манулы</Link>
          </li>
          <li>
          <Link to="/Contact" className="nav-link">Контакты</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;