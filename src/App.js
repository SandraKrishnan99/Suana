import React,{Component} from 'react';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Contactus';
import Products from './Components/Pages/AboutUs';
import SignUp from './Components/Pages/Signup';
class App extends Component{
  render(){
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/Contact' component={Services} />
        <Route path='/AboutUs' component={Products} />
        <Route path='/Signup' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}
}

export default App;
