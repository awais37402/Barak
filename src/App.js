import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MagneticYieldAlliance from './pages/MagneticYieldAlliance'; // Ensure the path is correct

import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import MagneticWater from './components/Magneticwater'; // ✅ New import for MagneticWater

import ScrollToTopButton from './components/ScrollToTopButton'; // ✅ This shows floating scroll-to-top button

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/magneticwater" element={<MagneticWater />} />
          <Route path="/magneticyieldalliance" element={<MagneticYieldAlliance />} /> {/* ✅ Added route for MagneticYieldAlliance */}
        </Routes>

        <ScrollToTopButton /> {/* Floating scroll-to-top button */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
