import React from "react";

import UnityView from "../../Components/Costumize/UnityView";
import GetStarted from "../../Components/Costumize/GetStarted";
import Customize from "../../Components/Costumize/Customize";

import { 
  CostumizeContainer,
  Header,
  MidSection,
  CostumizeSection 
} from "../../elements/screens/mainScreens/costumize/costumize";

function Costumize() {
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
          <GetStarted/>
          <Customize />
          </CostumizeSection>
        </MidSection>
      
      </div>
     </CostumizeContainer>


  );
}

export default Costumize;