import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Navigation from './components/Navigation'
// import Footer from './components/Footer'
import video from './images/glass.jpg'
// pages
import Home from './pages/Home'
import Api from './pages/Api'
import Products from './pages/Products';
import AllProducts from './pages/TodosLosProductos';
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/products" element={<Products />} />
				<Route path="/all" element={<AllProducts />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/product/:id" element={<ProductDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
