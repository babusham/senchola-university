import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Component } from 'react';
import Footer from './components/Footer';
import Login from './components/Login';
// import Container from 'react-bootstrap/Container';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";


class App extends Component {
  state = {clicked : false };

  handleClick = ()  =>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
     <Footer />
    </div>
  );
}
}

export default App;