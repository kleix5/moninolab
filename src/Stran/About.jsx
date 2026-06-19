import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './About.css';

function About() {
  return (
    <div className="page1">
      <Navbar />
      <h1>О нашей команде</h1>
      <main className="page-content1">
        <div class="left_col">
          <img className="main_image" src="./manul/pachani.png" />
          </div>
        <div class="right_col">
          <div class="card-row">
            <div class="card-image"></div>
            <div class="card-text">
              <p>Максим.<br/> Похожий на чеченца мальчик считается умным, но не очень сообразительным.<br/> Любит Delta Force и крем-соду <br/> a.k.a тимлид</p>
            </div>
          </div>
          <div class="card-row text-left">
            <div class="card-image2"></div>
            <div class="card-text">
              <p>Илья.<br/> Выглядит как спичка, всегда ходит с палаткой и пузырём.<br/> Обожает тратиться на пожрать<br/> a.k.a backend разработчик</p>
            </div>
          </div>
          <div class="card-row">
            <div class="card-image3"></div>
            <div class="card-text">
              <p>Андрей.<br/> Мальчик из киндера, гуль 1000-7.<br/> Играет в дотку и любит покушать во Вкусно и Точка <br/> a.k.a 47tangomid и дизайнер</p>
            </div>
            </div>
          </div>

      </main>
      <Footer />
    </div>
  );
}

export default About;