import {Link} from 'react-router-dom';
import { useState } from "react";
import { RiArrowDropRightLine } from 'react-icons/ri'
import {db} from '../../firebaseConfig'
import MaterialCard from '../Cards/MaterialCard' 
import { 
  CustomizeContainer 
} from "../../elements/screens/mainScreens/costumize/costumize";

const Customize =({elements, category, item, setSelectedData, element, setElement}) =>{
  const [data, setData] = useState([]);
  const onClick= async (element)=>{
      const response=db.collection(category).doc(item).collection(element);
      const resData= await response.get();
      setElement(element)
      setData(resData.docs.map(doc=>({...doc.data()})))
    } 
  

    const renderElements=()=> {
      
        return elements.map((element) => {
          return (
            <Link to='#' onClick={()=>onClick(element)} key={element}>{element} 
                  <RiArrowDropRightLine size={40}/>
            </Link>
        
          )
        })
      }
      
  const renderData=()=> {
    
      return data.map((element) => {
        return (
          <MaterialCard to='#' 
          onClick={()=>setSelectedData(element)}
           key={element.MaterialID+element.Color} imgUrl={element.Thumbnail} color={element.Color} element={element}/> 
         
        )
      })
    }
 

  return (
          <CustomizeContainer>
            
              
          { elements.length>0 && <p className='title'> Customize</p>}
          {!element&& <div className="Customize">
                {renderElements()}
              </div>}
              { data.length!==0 && element&&<div id="CustomizeData">
              <Link to='#' id="CustomizeElement" onClick={()=>setElement('')} key={element}>{element} 
              </Link>
                {renderData()}
              </div>}
            
          </CustomizeContainer>
  );
}

export default Customize;