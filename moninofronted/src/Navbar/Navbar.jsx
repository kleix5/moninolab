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
            <a href="%PUBLIC_URL%/about.html" className="nav-link">О нас</a>
          </li>
          <li>
            <a href="./services.html" className="nav-link">Манулы</a>
          </li>
          <li>
            <a href="./contact.html" className="nav-link">Корзина</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;