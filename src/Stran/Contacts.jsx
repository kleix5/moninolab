import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Contacts.css'

function Contact() {
  return (
    <div className="page2">
      <Navbar />
      <main className="page-content2">
        <h1>Свяжитесь с нами</h1>
        <p>Напишите нам на email: misterpetr52</p>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;