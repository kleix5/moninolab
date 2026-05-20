import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-osnova">
        <div className="navbar-logo">
          <img src="manul.png" alt='logo'/>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="/about" className="nav-link">О нас</a>
          </li>
          <li>
            <a href="/services" className="nav-link">Манулы</a>
          </li>
          <li>
            <a href="/contact" className="nav-link">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;