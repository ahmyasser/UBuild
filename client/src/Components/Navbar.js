import{
    NavBar,
    HeaderContainer,
    HeaderMid,
    HeaderRight,
    HeaderLeft
} from '../elements/header';

import DropDown from './DropDown';
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { IoMdBriefcase } from 'react-icons/io'
import {Link,  
//    useLocation 
} from 'react-router-dom';
import {useState} from 'react';

const Navbar  = () => {    
//const location = useLocation();

const [displayDropDown, setDisplayDropDown] = useState(false)

    return <NavBar>
        <HeaderContainer Home>
            
            <HeaderLeft Home className="header-left"> 
                <Link onClick={()=>setDisplayDropDown(!displayDropDown)} to="">
                    <HiOutlineDotsHorizontal size={40}/>
                </Link>  
            </HeaderLeft>

            <HeaderMid Home className="header-mid">
                <Link to="/">
                     <div> 
                         <p> Tiny Homes </p> 
                         <p>On Wheels</p>
                    </div>
                </Link>
            </HeaderMid>
            
            <HeaderRight Home> 
                <Link to="/models" >Models</Link>  
                <Link to="/inspirations">Inspirations</Link>  
                <Link to="/finances">Finances</Link>  
                <Link to="/summary" className="summary-icon"><IoMdBriefcase size={30} /></Link>  
            </HeaderRight>
             
        </HeaderContainer> 
        {displayDropDown && (
        <DropDown/>)}
</NavBar>

}

export default Navbar;