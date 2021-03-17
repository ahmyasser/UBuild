import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import UnityView from "../../Components/Costumize/UnityView";
import GetStarted from "../../Components/Costumize/GetStarted";
import Customize from "../../Components/Costumize/Customize";
import SummarySec from "../../Components/Costumize/SummarySec";


import { 
  CostumizeContainer,
  Header,
  MidSection,
  CostumizeSection,
  AddToCart 
} from "../../elements/screens/mainScreens/costumize/costumize";

const Costumize = () => {

  const [category, setCategory] = useState('Economic');
  const [elements, setElements] = useState([]);
  const [item, setItem] = useState('');
  const [selectedData, setSelectedData] = useState('');
  const [element, setElement] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [progression, setProgression] = useState(0);
  const [model, setModel] = useState({});
  const [cart, setCart] = useState({});

  const savedModel =localStorage.getItem('model')?JSON.parse(localStorage.getItem('model')):'';
  const savedCart =localStorage.getItem('savedCart')?JSON.parse(localStorage.getItem('savedCart')):{};

  
  useEffect(() => {
    if(progression===1){
      setModel(savedModel);
      if(savedCart) {setCart(
        {...savedCart});
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [progression])
  useEffect(() => {
    if(item&&element)
        setCart({...cart, [item+'-'+element]: selectedData})
    // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [selectedData])
  
     useEffect(()=>{
       if(model.price) setTotalCost(+model.price+Object.entries(cart).reduce((a,[_, v]) =>  a = a + v.Cost*model.size , 0 ));
    },[cart, model])

  const addToCart = ()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalCost',totalCost);
  }
  const numberWithCommas=(x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

return (
    <CostumizeContainer>
      <div className="wrapper">
        <Header>
          <p>Welcome to <span>UB.106 </span></p>
          <small>Pick your favourites & make it your own</small>
        </Header>
    
        <MidSection>
          <UnityView model={model} selectedData ={selectedData} progression={progression} setProgression={setProgression}/>                   
          <CostumizeSection>
          <GetStarted setElement={setElement} setElements={setElements} setItem={setItem} setCategory={setCategory} category={category} />
          <Customize element={element} setElement={setElement} elements={elements} category={category} item={item} setSelectedData={setSelectedData} />
          </CostumizeSection >
        </MidSection>
        <SummarySec cart={cart}/>
         <AddToCart>
          <Link to="/Summary" onClick={()=>addToCart()}>ADD ALL TO SHOPPING BAG</Link>
          {(totalCost!==0)&&<p>Total $ {numberWithCommas(totalCost)}</p>}
        </AddToCart>
      </div>
     </CostumizeContainer>


  );
}

export default Costumize;