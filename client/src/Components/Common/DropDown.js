import{
  DropDownContainer
} from '../../elements/common/dropDown';
import {Link,  
//    useLocation 
} from 'react-router-dom';


const DropDown  = ({setDisplayDropDown, pathname}) => {    
    
    return <DropDownContainer Home={pathname}>
        <Link onClick={()=>setDisplayDropDown(false)} to="/story">Our Story</Link>
        <Link onClick={()=>setDisplayDropDown(false)} to="/locations">Locations</Link>
        <Link onClick={()=>setDisplayDropDown(false)} to="/contact">Contact us</Link>
    </DropDownContainer>
    ;
}
export default DropDown;