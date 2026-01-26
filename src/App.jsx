import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, About, Leadership, Services, Products, WhyVeritas, Contact } from './pages';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="why-veritas" element={<WhyVeritas />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
