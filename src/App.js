import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import SuccessScreen from './screens/SuccessScreen';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/success' element={<SuccessScreen/>}/>
        </Routes>
    </Router>
  );
}

export default App;
