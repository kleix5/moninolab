import './Sidebar.css';

function Sidebar({ onCategoryChange, activeCategory }) {
  const categories = ['Все', 'Чехол', 'Кружка', 'Футболка'];

  return (
    <div className="sidebar">
      {/* <ul>
        <li><a href='/' className='side-link'>Профиль</a></li>
        <li><a href='/' className='side-link'><img src="./SVG/Corzina.svg" alt="Корзина" maxWidth="100px" height="100px" /></a></li>
        <li><a href='/' className='side-link'>Избранное</a></li>
      </ul> */}

      <div className="filter-section">
        <h3 className="filter-title">Категории</h3>
        <ul className="filter-menu">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;