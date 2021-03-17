import { useState } from 'react';
import {Link} from 'react-router-dom'


import { CheckoutBox } from '../../elements/screens/mainScreens/summary';
import {db, auth} from '../../firebaseConfig';


 
 const CheckoutForm  = ({model,cart, totalCost,setId, setThankyou}) => { 

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
  
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [error, setError] = useState('')
    
    const onClick = () => {
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            return setError('email')
        } 
        //
        const user = {
            email,
            phone,
            name,
            street,
            city,
            zip,
            state
        }     

    auth.signInAnonymously()
          .then(() => {
            Object.entries(cart).forEach(([_, value])=>{
                value.NormalMap=value.NormalMap1;
                value.MainTexture=value.MainTexture1;
            })
            db.collection("customizedModels").add({
                model: JSON.stringify(model),
                cart: JSON.stringify(cart),
                totalCost,
                user
            }).then((docRef) => {
                setId(docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            setThankyou(true)      
        })
          .catch((error) => {
            // var errorCode = error.code;
            // var errorMessage = error.message;
            console.log(error);
          });
    }
  

return( <CheckoutBox>
        <div className="header"> 
            <p>{model.name} ESTIMATE</p>
            <small>Project Estimates include Delivery, Install, Fabrication & Taxes.</small>
        </div>
        <div className="userInfo"> 
            <div className="formField">
                <label>FULL NAME</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Michael Zatorski*"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>          
            <div className="formField" >
                <label>E-MAIL</label>
                <input
                    style={error==='email'?{border:'solid 2px red'}:{ }}
                    type="email"
                    placeholder="michael@thow.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>          
            <div className="formField">
                <label>PHONE NUMBER</label>
                <input
                    type="tel"
                    placeholder="(425) -855-4234"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                />
            </div>          
        </div>
        <div className="addressInfo">
                <input
                    type="text"
                    placeholder="Street Address"
                    value={street}
                    className="formField"
                    id="street"
                    onChange={(e)=>setStreet(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    className="formField"
                    onChange={(e)=>setCity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="State"
                    value={state}
                    className="formField"
                    onChange={(e)=>setState(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Zip Code"
                    value={zip}
                    className="formField"
                    onChange={(e)=>setZip(e.target.value)}
                />
        </div>

        <div className="orderDetails">
            <div className="total">
                <p>Total</p>
                <p>{totalCost} USD</p>
            </div>
            <p className="tax">({totalCost} USD Including Tax)</p>
            <Link to="#" onClick={()=>{ onClick() }} >Submit</Link>
        </div>
    </CheckoutBox>
    );
     }

    export default CheckoutForm;