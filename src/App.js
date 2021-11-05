import logo from './logo.svg';
import Home from './screens/Home';
import Header from './components/Header';
import './App.css'
import './Mobile.css'
import HeroImg from './components/HeroImg';
import HeaderMobile from './components/HeaderMobile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="header-pc">
        <Header/>
      </div>
      <div className="header-mobile">
        <HeaderMobile/>
      </div>
      <HeroImg/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
