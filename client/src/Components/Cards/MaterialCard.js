import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {storage} from "../../firebaseConfig";
import {
    MaterialCardContainer
     } from '../../elements/cards/materialCard'
    
 
    
 const MaterialCard  = ({imgUrl, color, onClick, element}) => {

    const [url, setUrl] = useState('')
    useEffect(() => {
    const getImage =async (image) => {
        try {
            const data= await storage.ref(`Thumbnail/${image}`).getDownloadURL();
            element.thumbnail2 = data;
            setUrl(data);         
        } catch (error) {
            console.log(error)
        }

      }
        if(imgUrl)getImage(imgUrl);
        
    }, [element, imgUrl])    
     return( 
    <MaterialCardContainer >
        <Link
         to={`/customize`} onClick={()=>{onClick()}}> 
            {color&&<div style={{backgroundColor:`${color}`,width:'100px',height:'8vh'}}></div>}
            {url&&<img src={url} alt="MaterialCard" />}
        </Link>
        
    </MaterialCardContainer>
    );
 }
 export default MaterialCard;