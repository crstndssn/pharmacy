import logo from './logo.svg';
import './App.css';

// components
import Navigation from './components/Navigation'
// import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Api from './pages/Api'

function App() {
  return (
    <>
			<Navigation/>
			<Api />
			<Home />
		</>
  );
}

export default App;
