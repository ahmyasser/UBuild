import { Link } from 'react-router-dom';


import {
    ModelCardContainer
     } from '../../elements/cards/modelCard'
    
 
 const ModelCard  = ({obj}) => {          
     return( 
    <ModelCardContainer>
        <Link to={`/customize`}> 
            <img src={obj.url} alt="ModelCard" />
            <div className='content'>
                <h6>{obj.name}</h6>
                <div className='category'>
                    <p></p>
                </div>
                <div className='price'>
                <p>$ {obj.price}</p>                    
                </div>
            </div>
            </Link>
        
    </ModelCardContainer>
    );
 }
 export default ModelCard;