import './App.css';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
