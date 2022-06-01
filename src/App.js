import Navbar from './layout/Navbar';
import Logo from './assets/logo.png';
import background from './assets/background.webp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
    <img src={background} className='background' allowFullScreen></img>
    <h1 className='title'>Get your lifetime membership now!</h1>
    <img src={Logo} className='logo_app'></img>
  </div>
  );
}

export default App;
