import React,{useState,useEffect}from'react';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Route,Switch}from"react-router-dom"
import Home from './components/home/home';
import Vehicules from './components/vehicules/vehicules';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
function App() {
  // const [loading,setloading] = useState(false);
  //   const override =css`
  //   dispaly:Block;
  //   border-color:red;
  //   margin-top:50%;`;

  //   useEffect(()=>{
  //     setloading(true);
  //     setTimeout(() => {
  //       setloading(false);
  //     }, 5000);
  //   },[]);
  return (

    <div className="app">
      <Router>
        <NavBar/>
        <div className="section">
            <Home/>
            <Vehicules/>
            <Reviews/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
</Router>
    </div>
  );
}

export default App;
