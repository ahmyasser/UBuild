import {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {storage} from "../../firebaseConfig";
import {
    ModelCardContainer
     } from '../../elements/cards/modelCard'
    
 
    
 const ModelCard  = ({obj, setModel}) => {
    const history = useHistory();
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
    const getImage =async (image) => {
        try {
            const data= await storage.ref(`models/${image}`).getDownloadURL();
            setUrl(data);            
            setLoading(false)
        } catch (error) {
            console.log(error)
        }

      }
    getImage(obj.url);
    }, [obj])    
               
    const numberWithCommas=(x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    const saveModel = async () =>{
            try {
                const codeUrl= await storage.ref(`Build/${obj.build}.wasm`).getDownloadURL();
                const frameworkUrl= await storage.ref(`Build/${obj.build}.framework.js`).getDownloadURL();
                const loaderUrl= await storage.ref(`Build/${obj.build}.loader.js`).getDownloadURL();
                const dataUrl= await storage.ref(`Build/${obj.build}.data`).getDownloadURL();
                obj.codeUrl= codeUrl;
                obj.frameworkUrl= frameworkUrl;
                obj.dataUrl= dataUrl;
                obj.loaderUrl= loaderUrl;
                setModel(obj)
            } catch (error) {
                console.log(error)
                localStorage.setItem('model',JSON.stringify(obj) )
            }
            setModel(obj)
            localStorage.setItem('model',JSON.stringify(obj) )
            history.push('/customize')
          
    }
     return <>{!loading&&<ModelCardContainer>
        <Link onClick={()=>saveModel()} to='#' > 
            <img src={url} alt="ModelCard" />
            <div className='content'>
                <h6>{obj.name}</h6>
                <p>$ {numberWithCommas(obj.price)}</p>                    
             </div>
            </Link>
        
    </ModelCardContainer>}
    </>
 }
 export default ModelCard;