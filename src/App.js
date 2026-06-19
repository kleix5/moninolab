import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Osnova from './Osnova.js';
import About from './Stran/About.jsx';
import Contact from './Stran/Contacts.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';



function App(){
  return (
<div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Osnova />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </main>
    </div>
  );
}



export default App;

