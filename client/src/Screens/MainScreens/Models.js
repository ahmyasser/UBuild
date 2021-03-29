
import {
  ModelsScreenContainer,
  ModelsContainer
  
} from '../../elements/screens/mainScreens/models';
import {useEffect, useState} from 'react';
import {db, auth} from "../../firebaseConfig";
import ModelCard from '../../Components/Cards/ModelCard';

const Models= ({setModel})=>{

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  localStorage.removeItem('model');
    const getModels = async () =>{
    try {  
      await auth.signInAnonymously()  
      const response= db.collection('models');
      const data= await response.get();
      setModels(data.docs.map(doc=>({...doc.data()})))
    } catch (error){
        console.log(error);
    }
  }
  getModels();
  setLoading(false);
}, [])

const renderData=()=> {
  return models.map((model) => {
     return (
        <ModelCard obj={model} key={model.id} setModel={setModel}/>
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