import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ContactComplete from './pages/ContactComplete';
import './App.css';

function App() {
  // GitHub Pagesのbaseパスを設定
  const basename = import.meta.env.BASE_URL;

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/complete" element={<ContactComplete />} />
      </Routes>
    </Router>
  );
}

export default App;
