import { React,} from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import ProductCard from './Content/ProductCard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';




function App(){
  return (
    <div className="stranichka">
      <Navbar/>
      <div className="page-body">
        <Sidebar/>
        <div className="content">
          <div className='product-grid'>
          <ProductCard
          image="./manul/chehol_manul1.png"
          title="Чехол"
          price="??"
          rating="4.5"
          onAddToCart={() => alert('Добавлено в корзину!')}
        />
        <ProductCard
          image="./manul/chehol_manul2.png"
          title="Продукт 1"
          price="??"
          rating="4.5"
          onAddToCart={() => alert('Добавлено в корзину!')}
        /><ProductCard
        image="./manul/chehol_manul3.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/chehol_manul4.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/chehol_manul5.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/chehol_manul6.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
       image="./manul/chehol_manul7.png"
        title="Продукт 1"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup2.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup3.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup4.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup5.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup6.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/tishka_brown2.png"
        title="Футболка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/tishka_red.png"
        title="Футболка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/tishka_blue.png"
        title="Футболка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/tishka_grey.png"
        title="Футболка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/tishka_darkblue.png"
        title="Футболка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/tishka_black_pro.png"
        title="Футболка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )

}


export default App;

