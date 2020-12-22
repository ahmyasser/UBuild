import{
  DropDownContainer
} from '../elements/dropDown';
import {Link,  
//    useLocation 
} from 'react-router-dom';


const DropDown  = () => {    
    
    return <DropDownContainer Home>
        <Link to="/story">Our Story</Link>
        <Link to="">Locations</Link>
        <Link to="">Contact us</Link>
    </DropDownContainer>
    ;
}
export default DropDown;