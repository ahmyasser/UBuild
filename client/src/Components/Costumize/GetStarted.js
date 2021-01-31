import {Link} from 'react-router-dom';

import { 
  GetStartedContainer 
} from "../../elements/screens/mainScreens/costumize/costumize";

const GetStarted =({onClick}) =>{



return (
          <GetStartedContainer>
            
            <div className="getStarted">
              
              <p className='title'> Get Started</p>
              <div className='container'>
                <div className='categories'>
                  <Link to='#'>Economic</Link>
                  <Link to='#'>Standard</Link>
                  <Link to='#'>Luxury</Link>
                </div>
                <div className='types'>
                  <Link onClick={()=>onClick('kitchen')} to='#'>Kitchen</Link>
                  <Link onClick={()=>onClick('Bathroom')} to='#'>Bathroom</Link>
                  <Link onClick={()=>onClick('InteriorWalls')} to='#'>Interior</Link>
                  <Link onClick={()=>onClick('Exterior')} to='#'>Exterior</Link>
                  <Link onClick={()=>onClick('Flooring')} to='#'>Flooring</Link>
                  <Link onClick={()=>onClick('Windows')} to='#'>Windows</Link>
                  <Link onClick={()=>onClick('Utilities')} to='#'>Utility Packages</Link>
                  <Link onClick={()=>onClick('KitchenCabinets')} to='#'>Kitchen Cabinets</Link>
                </div>
              </div>
            </div>
            <div className="customize"></div>
          </GetStartedContainer>


  );
}

export default GetStarted;