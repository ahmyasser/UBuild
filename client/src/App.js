import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Screens/MainScreens/Home';


function App() {
  return (
<BrowserRouter>
    <Navbar/>
    <Switch>
    
    <Route path="/">
     <Home/>
    </Route>
    
    </Switch>
    <Footer />    
    </BrowserRouter>
    
  );
}

export default App;
