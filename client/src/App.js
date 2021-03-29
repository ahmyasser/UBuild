import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import Home from './Screens/MainScreens/Home';
import Finances from './Screens/MainScreens/Finances';
import Inspirations from './Screens/MainScreens/Inspirations';
import Models from './Screens/MainScreens/Models';
import Customize from './Screens/MainScreens/Customize';
import Loading from './Components/Customize/Loading';

import Summary from './Screens/MainScreens/Summary';

import Story from './Screens/SecondaryScreens/Story';
import Location from './Screens/SecondaryScreens/Location';
import Contact from './Screens/SecondaryScreens/Contact';

import './App.css'
import {  useState } from 'react';

const  App = () => {
  const [model, setModel] = useState('');
 
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/story" component={Story}/>    
            <Route path="/locations" component={Location}/>    
            <Route path="/Contact" component={Contact}/>    

            <Route path="/load/:id" ><Loading setModel={setModel}/></Route>
            <Route path="/customize" ><Customize model={model} setModel={setModel}/></Route>
            <Route path="/models" ><Models setModel={setModel}/></Route>    
            
            <Route path="/Summary" component={Summary}/>    
            <Route path="/Inspirations" component={Inspirations}/>    
            <Route path="/Finances" component={Finances}/>    
            <Route path="/" exact component={Home}/>
        </Switch>
        <Footer />    
    </BrowserRouter>
    
  );
}

export default App;
