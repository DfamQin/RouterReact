import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Interest from './Interest';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App; 