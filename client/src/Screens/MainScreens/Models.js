//import {Link} from 'react-router-dom';

import {
  ModelsScreenContainer,
  ModelsContainer
  
} from '../../elements/screens/mainScreens/models';

import ModelCard from '../../Components/Cards/ModelCard';
import Img1 from '../../Assets/Images/model1.png';
import Img2 from '../../Assets/Images/model2.png';
const Models= ()=>{

  const obj1={
    id:'ksdsaofma12332',
    image: Img1,
    name: 'Affordable Fran',
    category:'Economic',
    price:7600
  };
  
  const obj2={
    id:'ksdsaofma1',
    image: Img2,
    name: 'Vegan Paradise',
    category:'Luxury',
    price:10600
  };

  return (
  <>
  <ModelsScreenContainer>
    <div className='title'>
      <p>Select & Build your Model</p> 
      <small>Browse 10+ Models & Customize to your own preferences</small>
    </div>
    <ModelsContainer>
      <div className="wrapper">
        <ModelCard obj={obj1} />
        <ModelCard obj={obj2} />
        <ModelCard obj={obj1} />
        <ModelCard obj={obj2} />
        <ModelCard obj={obj1} />
        <ModelCard obj={obj2} />
      </div>
    </ModelsContainer>
  
  </ModelsScreenContainer>
  
  </>
    ) ;
}
export default Models;