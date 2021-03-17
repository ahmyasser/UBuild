import {
    CardContainer
    
    } from '../../elements/cards/summaryCard'
    
 
 const SummaryCard  = ({cartElemnt, type}) => {      
     
    const model = localStorage.getItem('model')?JSON.parse(localStorage.getItem('model')):null;
    
    return cartElemnt? <CardContainer>
           { !cartElemnt.thumbnail2&&<div className="image" style={{backgroundColor:`${cartElemnt.Color}`}}></div>}
           {  cartElemnt.thumbnail2&& <img className="image" 
           src={cartElemnt.thumbnail2} alt="MaterialCard" />}
            <div className="info">
                <p className="item">{cartElemnt.MaterialID||cartElemnt.Color} / Item Selected </p>
                <p className="modelName">Model: {model.name}</p>
                <p className="modelName">Type: {type}</p>
                <div>
                    <p className="size">${cartElemnt.Cost?cartElemnt.Cost:0}x {model.size}</p> 
                    <p className="price">${ cartElemnt.Cost*(+model.size)}</p>
                </div>
            </div>
     </CardContainer>:<></>;
 }
 export default SummaryCard;