import {Link} from 'react-router-dom';

import { 
  GetStartedContainer 
} from "../../elements/screens/mainScreens/costumize/costumize";

const GetStarted =() =>{
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
                  <Link to='#'>Kitchen</Link>
                  <Link to='#'>Bathroom</Link>
                  <Link to='#'>Interior</Link>
                  <Link to='#'>Exterior</Link>
                  <Link to='#'>Utility Packages</Link>
                </div>
              </div>
            </div>
            <div className="customize"></div>
          </GetStartedContainer>


  );
}

export default GetStarted;