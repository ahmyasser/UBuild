import { useEffect, useState } from "react";
import { useHistory} from 'react-router-dom';
import { storage } from "../../firebaseConfig";



 const ModelSummary  = ({totalCost}) => { 
    const model =localStorage.getItem('model')?JSON.parse(localStorage.getItem('model')):'';
    
    const history = useHistory();
    const [url, setUrl] = useState('')

    useEffect(() => {
        if (!model) { 
            history.push("/models");
        }   
        const getImage =async (image) => {
        try {
            const data= await storage.ref(`models/${image}`).getDownloadURL();
            setUrl(data);            
        } catch (error) {
            console.log(error)
            }
        }
    
            getImage(model.url);
     
      }, [model, history])    
             
     return( 
        <div className='model'>
        <img className='model-pic' src={url} alt="model pic" />
        <div className='model-details'>
            <p className="name">{model.name}</p>
            <p className="price">{totalCost} USD</p>
            <p className="tax">({totalCost} USD Including Tax)</p>
            <p className="weight">Total weight: <span>2500 KGs</span></p>
        </div>
    </div>
    );
 }
 export default ModelSummary;