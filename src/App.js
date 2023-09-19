import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;