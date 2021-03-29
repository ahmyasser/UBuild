// import {Link} from 'react-router-dom';
// import { RiArrowDropRightLine } //from 'react-icons/ri'
import SummaryCard from "../Cards/SummaryCard";

import { SummaryContainer } from "../../elements/screens/mainScreens/customize/customize";

const SummarySec =({cart}) =>{

  const renderData=()=> {
  
    return Object.entries(cart).map(([key, value]) => {
       return (<SummaryCard cartElemnt={value} key={key} type={key}/>)
    })
 }

  return (
          <SummaryContainer>
            {renderData()}
          </SummaryContainer>
  );
}

export default SummarySec;