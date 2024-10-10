import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Включает Popper.js
import './App.css';
import ScrollToTop from './servers/ScrollToTop';
import ServiceMobApp from './pages/ServiceMobApp';
import ServiceWebApp from './pages/ServiceWebApp';
import ServiceWebsite from './pages/ServiceWebsite';
import ServiceDesign from './pages/ServiceDesign';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/service/mob-app" element={<ServiceMobApp />} />
          <Route path="/service/web-app" element={<ServiceWebApp />} />
          <Route path="/service/website" element={<ServiceWebsite />} />
          <Route path="/service/design" element={<ServiceDesign />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

