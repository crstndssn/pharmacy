import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

// components
import Navigation from './components/Navigation'
// import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Api from './pages/Api'
import Product from './pages/Product';

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        {/* <Route exact path="/contact" component={Contact} /> */}
			</Routes>
			</Router>
			<Api />
		</>
	);
}

export default App;
