import {Link} from 'react-router-dom';


import {
    CardContainer
     } from '../../elements/cards/inspirationsCard'


 
 const InispirationsCard  = ({obj}) => {          
     return( 
    <CardContainer>
        <Link to="#">
            <img src={obj.image} alt="InispirationsCard" />
            <div className='content'>
                <h6>{obj.name}</h6>
                <div className='category'>
                    <p>{obj.category}</p>
                </div>
                <div className='price'>
                <p>$ {obj.price}</p>                    
                </div>
            </div>
            </Link>
        
    </CardContainer>
    );
 }
 export default InispirationsCard;