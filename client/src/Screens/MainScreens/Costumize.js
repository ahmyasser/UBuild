import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
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

const Costumize = ({setModel,model}) => {
  const history = useHistory()
  const [category, setCategory] = useState('Economic');
  const [elements, setElements] = useState([]);
  const [item, setItem] = useState('');
  const [selectedData, setSelectedData] = useState('');
  const [element, setElement] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [progression, setProgression] = useState(0);
  const [cart, setCart] = useState({});
  
  const savedModel =localStorage.getItem('model')?JSON.parse(localStorage.getItem('model')):'';
  const savedCart =localStorage.getItem('savedCart')?JSON.parse(localStorage.getItem('savedCart')):{};

  useEffect(() => {
   if(!model)  savedModel? setModel(savedModel): history.push('/models')
  }, [history, model, savedModel, setModel] );

  useEffect(() => {
    if(progression===1){
      if(savedCart) {
        setCart({...savedCart});
        Object.entries(savedCart).map(([key, value]) => 
        { return window.setTimeout(()=>{
          const itemVal= key.substring(0,key.indexOf('-'));
          const elementVal= key.substring(key.indexOf('-')+1,key.length);
          setItem(itemVal);
          setElement(elementVal);
          setSelectedData(value)
        }
          , 500); 
        })
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
      setTotalCost(+model.price+Object.entries(cart)
      .reduce((a,[_, v]) =>  a = a + v.Cost*model.size , 0 ));
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
      {model && <div className="wrapper">
        <Header>
          <p>Welcome to <span>{model.name} </span></p>
          <small>Pick your favourites & make it your own</small>
        </Header>
    
        <MidSection>
          <UnityView 
            model={model} 
            selectedData ={selectedData} 
            progression={progression} 
            setProgression={setProgression}/>                   
          <CostumizeSection>
          <GetStarted 
            setElement={setElement} 
            setElements={setElements} 
            setItem={setItem} 
            setCategory={setCategory} 
            category={category} />
          <Customize element={element} 
            setElement={setElement} 
            elements={elements} 
            category={category} 
            item={item} 
            setSelectedData={setSelectedData} />
          </CostumizeSection >
        </MidSection>
        <SummarySec cart={cart}/>
         <AddToCart>
          <Link to="/Summary" onClick={()=>addToCart()}>ADD ALL TO SHOPPING BAG</Link>
          {(totalCost!==0)&&<p>Total $ {numberWithCommas(totalCost)}</p>}
        </AddToCart>
      </div>}
     </CostumizeContainer>


  );
}

export default Costumize;