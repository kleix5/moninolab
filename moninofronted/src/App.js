import { React,} from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import ProductCard from './Content/ProductCard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';




function App(){
  return (
    <div>
      <Navbar/>
      <Sidebar/>

       
        <ProductCard
          image="./manul/caseblack2.png"
          title="Чехол"
          price="??"
          rating="4.5"
          onAddToCart={() => alert('Добавлено в корзину!')}
        /><ProductCard
        image="./manul/caseblack.png"
        title="Чехол"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/casegreen.png"
        title="Чехол"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/caseorange.png"
        title="Чехол"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/casepink.png"
        title="Чехол"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/casered.png"
        title="Чехол"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/casestiker.png"
        title="Чехол"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup_cyan.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup_grey.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup_white.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup_pink.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup_green.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup_blue.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup_brown.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/cup_red.png"
        title="Кружка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/tishka_pink.png"
        title="Футболка"
        price="??"
        rating="4.5"
        onAddToCart={() => alert('Добавлено в корзину!')}
      /><ProductCard
        image="./manul/tishka_green.png"
        title="Футболка"
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
        image="./manul/tishka_white.png"
        title="Футболка"
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

      <Footer/>
    </div>
  )

}


export default App;

