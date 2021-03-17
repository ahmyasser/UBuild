
import {
  ModelsScreenContainer,
  ModelsContainer
  
} from '../../elements/screens/mainScreens/models';
import {useEffect, useState} from 'react';
import {db} from "../../firebaseConfig";
import ModelCard from '../../Components/Cards/ModelCard';
const Models= ()=>{

  const [models, setModels] = useState([]);
  
  const [loading, setLoading] = useState(true);



useEffect(() => {
  const getModels = async () =>{
    const response= db.collection('models');
    const data= await response.get();
    setModels(data.docs.map(doc=>({...doc.data()})))
   }   
  getModels();
  setLoading(false);
}, [])

const renderData=()=> {
  return models.map((model) => {
     return (
        <ModelCard obj={model} key={model.id}/>
      )
  })
}


return (<>
  {!loading&&<ModelsScreenContainer>
    <div className='title'>
      <p>Select & Build your Model</p> 
      <small>Browse 10+ Models & Customize to your own preferences</small>
    </div>
    <ModelsContainer>
      <div className="wrapper">
        {renderData()}
      </div>
    </ModelsContainer>
  
  </ModelsScreenContainer>}
  
  </>) ;
}
export default Models;