import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './pages/MainPage';
import BrandsPage from './pages/BrandsPages';
import CategoryPage from './pages/CategoryPage';
import ProductsPage from './pages/ProductsPage';
import ScrollToTop from './helpers/scrollToTop/scrolToTop';

import './App.scss';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
