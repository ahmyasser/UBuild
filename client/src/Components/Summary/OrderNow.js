import {Link} from 'react-router-dom';
import { OrderNowBox } from '../../elements/screens/mainScreens/summary';

 const OrderNow  = ({setBlur, totalCost}) => {          
     return( 
        <OrderNowBox>
        <div className="total">
            <p>Total</p>
            <p>{totalCost} USD</p>
        </div>
            <p className="tax">({totalCost} USD Including Tax)</p>
            <Link to="#" onClick={()=>{ setBlur(true) }} >Order</Link>               
    </OrderNowBox>

    );
 }
 export default OrderNow;