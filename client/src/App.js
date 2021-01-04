import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import Home from './Screens/MainScreens/Home';
import Finances from './Screens/MainScreens/Finances';
import Inspirations from './Screens/MainScreens/Inspirations';
import Models from './Screens/MainScreens/Models';
import Costumize from './Screens/MainScreens/Costumize';

import Summary from './Screens/MainScreens/Summary';

import Story from './Screens/SecondaryScreens/Story';
import Location from './Screens/SecondaryScreens/Location';
import Contact from './Screens/SecondaryScreens/Contact';

function App() {
  return (
<BrowserRouter>
    <Navbar/>
    <Switch>
    <Route path="/story" component={Story}/>    
    <Route path="/locations" component={Location}/>    
    <Route path="/Contact" component={Contact}/>    


    <Route path="/costumize/" component={Costumize}/>
    <Route path="/Models" component={Models}/>    
    <Route path="/Summary" component={Summary}/>    
    <Route path="/Models" component={Models}/>    
    <Route path="/Inspirations" component={Inspirations}/>    
    <Route path="/Finances" component={Finances}/>    
    <Route path="/" exact component={Home}/>
    
    </Switch>
    <Footer />    
    </BrowserRouter>
    
  );
}

export default App;
