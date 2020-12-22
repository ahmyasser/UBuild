import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Screens/MainScreens/Home';
import Story from './Screens/SecondaryScreens/Story';


function App() {
  return (
<BrowserRouter>
    <Navbar/>
    <Switch>
    <Route path="/story" component={Story}/>    
    <Route path="/" exact component={Home}/>
    
    </Switch>
    <Footer />    
    </BrowserRouter>
    
  );
}

export default App;
