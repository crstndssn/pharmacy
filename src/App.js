import logo from './logo.svg';
import './App.css';

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
			<Navigation/>
			<Api />
			<Home />
			<Product/>
		</>
  );
}

export default App;
