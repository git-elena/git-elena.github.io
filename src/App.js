import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';


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
import ScrollToTopButton from './components/ScrollToTopButton';

import ServiceApp from './pages/services/ServiceApp';
import ServiceWebsite from './pages/services/ServiceWebsite';
import ServiceDesign from './pages/services/ServiceDesign';

import PortfolioHelpCenter24 from './pages/portfolio/PortfolioHelpCenter24';
import PortfolioHirosaki from './pages/portfolio/PortfolioHirosaki';
import PortfolioKinuLiutas from './pages/portfolio/PortfolioKinuLiutas';
import PortfolioFastTemplate from './pages/portfolio/PortfolioFastTemplate';


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

          {/* <Route path="/service/mob-app" element={<ServiceMobApp />} />
          <Route path="/service/web-app" element={<ServiceWebApp />} /> */}

          <Route path="/service/website" element={<ServiceWebsite />} />
          <Route path="/service/app" element={<ServiceApp />} />
          <Route path="/service/design" element={<ServiceDesign />} />

          <Route path="/portfolio/helpcenter24" element={<PortfolioHelpCenter24 />} />
          <Route path="/portfolio/hirosaki" element={<PortfolioHirosaki />} />
          <Route path="/portfolio/kinu-liutas" element={<PortfolioKinuLiutas />} />
          <Route path="/portfolio/templates" element={<PortfolioFastTemplate />} />

        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;

