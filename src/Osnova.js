import { React, useState } from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import ProductCard from './Content/ProductCard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import './index.css'

const products = [
  { id: 1, image: "./manul/chehol_manul1.png", title: "Чехол", category: "Чехол", price: "??", rating: "4.5" },
  { id: 2, image: "./manul/chehol_manul2.png", title: "Чехол", category: "Чехол", price: "??", rating: "4.5" },
  { id: 3, image: "./manul/chehol_manul3.png", title: "Чехол", category: "Чехол", price: "??", rating: "4.5" },
  { id: 4, image: "./manul/chehol_manul4.png", title: "Чехол", category: "Чехол", price: "??", rating: "4.5" },
  { id: 5, image: "./manul/chehol_manul5.png", title: "Чехол", category: "Чехол", price: "??", rating: "4.5" },
  { id: 6, image: "./manul/chehol_manul6.png", title: "Чехол", category: "Чехол", price: "??", rating: "4.5" },
  { id: 7, image: "./manul/chehol_manul7.png", title: "Чехол", category: "Чехол", price: "??", rating: "4.5" },
  { id: 8, image: "./manul/cup2.png", title: "Кружка", category: "Кружка", price: "??", rating: "4.5" },
  { id: 9, image: "./manul/cup3.png", title: "Кружка", category: "Кружка", price: "??", rating: "4.5" },
  { id: 10, image: "./manul/cup4.png", title: "Кружка", category: "Кружка", price: "??", rating: "4.5" },
  { id: 11, image: "./manul/cup5.png", title: "Кружка", category: "Кружка", price: "??", rating: "4.5" },
  { id: 12, image: "./manul/cup6.png", title: "Кружка", category: "Кружка", price: "??", rating: "4.5" },
  { id: 13, image: "./manul/tishka_brown2.png", title: "Футболка", category: "Футболка", price: "??", rating: "4.5" },
  { id: 14, image: "./manul/tishka_red.png", title: "Футболка", category: "Футболка", price: "??", rating: "4.5" },
  { id: 15, image: "./manul/tishka_blue.png", title: "Футболка", category: "Футболка", price: "??", rating: "4.5" },
  { id: 16, image: "./manul/tishka_grey.png", title: "Футболка", category: "Футболка", price: "??", rating: "4.5" },
  { id: 17, image: "./manul/tishka_darkblue.png", title: "Футболка", category: "Футболка", price: "??", rating: "4.5" },
  { id: 18, image: "./manul/tishka_black_pro.png", title: "Футболка", category: "Футболка", price: "??", rating: "4.5" },
];

function Osnova(){
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="stranichka">
      <Navbar/>
      <div className="page-body">
        <Sidebar onCategoryChange={setSelectedCategory} activeCategory={selectedCategory} />
        <div className="content">
          <div className='product-grid'>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                onAddToCart={() => alert('Добавлено в корзину!')}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Osnova;

