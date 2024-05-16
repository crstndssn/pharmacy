import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Navigation from './components/Navigation'
// import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Api from './pages/Api'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About';

function App() {
	return (
		<>
	
			<Router>
						<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product" element={<Product />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
