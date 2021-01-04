import {Link} from 'react-router-dom';

import { 
  CustomizeContainer 
} from "../../elements/screens/mainScreens/costumize/costumize";

const Customize =() =>{
  return (
          <CustomizeContainer>
            
              
              <p className='title'> Customize</p>
              <div className="Customize">
                  <Link to='#'>Economic</Link>
                  <Link to='#'>Standard</Link>
                  <Link to='#'>Luxury</Link>
                  <Link to='#'>Kitchen</Link>
                  <Link to='#'>Bathroom</Link>
                  <Link to='#'>Interior</Link>
                  <Link to='#'>Exterior</Link>
                  <Link to='#'>Utility Packages</Link>
                  </div>
            
            
          </CustomizeContainer>
  );
}

export default Customize;