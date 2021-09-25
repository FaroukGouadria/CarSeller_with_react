import React,{useState,useEffect}from'react';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Route,Switch}from"react-router-dom"
import Home from './components/home/home';
import Vehicules from './components/vehicules/vehicules';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import Contact from './components/contact/contact';
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
    <Router>  
      <NavBar/>
      <Switch>
        <Route path="/home"  component={Home} exact>
        <Home/>
        </Route>
        <Route path="/vehicules"  component={Vehicules} exact>
        <Vehicules/>
        </Route>
        <Route path="/reviews"  component={Reviews} exact>
        <Reviews/>
        </Route>
        <Route path="/services"  component={Services} exact>
        <Services/>
        </Route>
        <Route path="/contact"  component={Contact} exact>
        <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
