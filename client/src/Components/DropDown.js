import{
  DropDownContainer
} from '../elements/dropDown';
import {Link,  
//    useLocation 
} from 'react-router-dom';


const DropDown  = () => {    
    
    return <DropDownContainer Home>
        <Link to="/story">Our Story</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/contact">Contact us</Link>
    </DropDownContainer>
    ;
}
export default DropDown;