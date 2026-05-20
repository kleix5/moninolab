import { React,} from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import ProductCard from './Content/ProductCard.jsx';


function App(){
  return (
    <div>
      <Navbar/>
      <Footer/>
      <ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      />
      <ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="manul.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      />
    </div>
  )

}


export default App;

