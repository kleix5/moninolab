import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Contacts.css'

function About() {
  return (
    <div className="page1">
      <Navbar />
      <main className="page-content1">
        <h1>О нас</h1>
        <p>ЖОПА.</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;