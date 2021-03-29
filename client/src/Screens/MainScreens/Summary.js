import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { SummaryContainer } from "../../elements/screens/mainScreens/summary";

import SummarySec from '../../Components/Customize/SummarySec';
import CheckoutForm from '../../Components/Summary/CheckoutForm';
import ModelSummary from '../../Components/Summary/ModelSummary';
import OrderNow from '../../Components/Summary/OrderNow';
import ThankYou from '../../Components/Summary/ThankYou';

const Summary  = () => {
  const history = useHistory();
  const model =localStorage.getItem('model')?JSON.parse(localStorage.getItem('model')):'';
  const cart =localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):'';
  const totalCost =Math.floor(localStorage.getItem('totalCost')?JSON.parse(localStorage.getItem('totalCost')):0);
  
  const [blur, setBlur] = useState(false);
  const [thankyou, setThankyou] = useState(false);
  const [id, setId]= useState('');
  
  useEffect(() => {
    if (!model|| !totalCost) { 
        history.push("/models");
    }   
  }, [model, history, totalCost])    
  const numberWithCommas=(x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

    return<> <SummaryContainer Blur={blur} onClick={()=>{setBlur(false); setThankyou(false);}}>
            
            <div className='title'>
                <p>Here is your summary</p>
                <small>Get more details from your price break down below</small>
            </div>
            {model&& <ModelSummary totalCost={numberWithCommas(totalCost)}/> }

            {cart &&<>
                    <div className="title2"><p>What's included</p> </div>
                    <SummarySec cart={cart}/>
                </>
            }

            
    </SummaryContainer> 
    <OrderNow totalCost={totalCost} setBlur={setBlur}/>

    {blur&&<CheckoutForm model={model} cart={cart} totalCost={numberWithCommas(totalCost)} setId= {setId} setThankyou={setThankyou}/>}
    {thankyou&& <ThankYou id={id}/>}
    </>
}
export default Summary;