//import {Link} from 'react-router-dom';


import {
    CardContainer
     } from '../../elements/screens/mainScreens/summary'


import {
    
    } from '../../elements/cards/summaryCard'
    
 
 const SummaryCard  = ({obj}) => {          
     return( <CardContainer>
            <div className="image">
                </div>
            <div>
                <p>White Marble Counter / Item Selected </p>
                <small>Model No</small>
                <small>Desc1</small>
                <small>Desc2</small>
                <div>
                    <p>$200x50</p> 
                    <p>$10,000</p>
                </div>
            </div>
           
     </CardContainer>);
 }
 export default SummaryCard;