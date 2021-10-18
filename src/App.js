import logo from './logo.svg';
import Home from './screens/Home';
import Header from './components/Header';
import './App.css'
import HeroImg from './components/HeroImg';

function App() {
  return (
    <div className="app">
      <Header/>
      <HeroImg/>
      <Home/>
    </div>
  );
}

export default App;
