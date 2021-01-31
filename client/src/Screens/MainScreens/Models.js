//import {Link} from 'react-router-dom';

import {
  ModelsScreenContainer,
  ModelsContainer
  
} from '../../elements/screens/mainScreens/models';
import {useEffect, useState} from 'react';
import Axios from "axios";
import ModelCard from '../../Components/Cards/ModelCard';
const Models= ()=>{

const [models, setModels] = useState([]);

const getModels = async () =>{
  const {data} = await Axios.get(`https://tinyhomes-fakeserver.herokuapp.com/models`);
  setModels(data)
}


useEffect(() => {
  getModels();
}, [])

const renderData=()=> {
  return models.map((model) => {
     return (
        <ModelCard obj={model} />
      )
  })
}


return (
  <>
  <ModelsScreenContainer>
    <div className='title'>
      <p>Select & Build your Model</p> 
      <small>Browse 10+ Models & Customize to your own preferences</small>
    </div>
    <ModelsContainer>
      <div className="wrapper">
        {renderData()}
      </div>
    </ModelsContainer>
  
  </ModelsScreenContainer>
  
  </>
    ) ;
}
export default Models;