import {Link} from 'react-router-dom';
import { RiArrowDropRightLine } from 'react-icons/ri'

import { 
  CustomizeContainer 
} from "../../elements/screens/mainScreens/costumize/costumize";

const Customize =({elements}) =>{

  const renderData=()=> {
    return elements.map((element) => {
       return (
        <Link to='#'key={element.id}>{element.title} 
                    <RiArrowDropRightLine size={40}/>
        </Link>
    
       )
    })
 }

  return (
          <CustomizeContainer>
            
              
          { elements.length>0 && <p className='title'> Customize</p>}
              <div className="Customize">
                {renderData()}
              </div>
            
            
          </CustomizeContainer>
  );
}

export default Customize;