import {
    CardContainer
     } from '../../elements/home/inspiredSec'


 
 const InspiredCard  = ({obj}) => {          
     return( 
    <CardContainer>
            <img src={obj.image} alt="InspiredCard" />
            
                <h6>{obj.name}</h6>
        
    </CardContainer>);
 }
 export default InspiredCard;