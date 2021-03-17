import React, {useState} from "react";
import Axios from 'axios'
import UnityView from "../../Components/Costumize/UnityView";
import GetStarted from "../../Components/Costumize/GetStarted";
import Customize from "../../Components/Costumize/Customize";
import SummarySec from "../../Components/Costumize/SummarySec";


import { 
  CostumizeContainer,
  Header,
  MidSection,
  CostumizeSection 
} from "../../elements/screens/mainScreens/costumize/costumize";

function Costumize() {

  const [elements, setElements] = useState([]);
  
const onClick =async (category)=>{
  const {data} = await Axios.get(`https://tinyhomes-fakeserver.herokuapp.com/${category}`)
  setElements(data);  
};
return (
    <CostumizeContainer>
      <div className="wrapper">
        <Header>
          <p>Welcome to <span>UB.106 </span></p>
          <small>Pick your favourites & make it your own</small>
        </Header>
    
        <MidSection>
          <UnityView/>          
          <CostumizeSection>
          <GetStarted onClick={onClick}/>
          <Customize elements={elements} />
          </CostumizeSection >
        </MidSection>
        <SummarySec/>
      </div>
     </CostumizeContainer>


  );
}

export default Costumize;