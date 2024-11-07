import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Labs from './pages/Labs';
import Testimonials from './pages/Testimonials';
import VisitRegistration from './pages/VisitRegistration';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/labs" element={<Labs />} />
            {/*<Route path="/testimonials" element={<Testimonials />} />*/}
            <Route path="/visit" element={<VisitRegistration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;