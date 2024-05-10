import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Navigation from './components/Navigation'
// import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Api from './pages/Api'
import Product from './pages/Product';
import Products from './pages/Products';
import AllProducts from './pages/TodosLosProductos';

function App() {
	return (
		<>
	
			<Router>
						<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product" element={<Product />} />
					<Route path="/products" element={<Products />} />
					<Route path="/all" element={<AllProducts />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
