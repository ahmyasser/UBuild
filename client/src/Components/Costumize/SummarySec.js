// import {Link} from 'react-router-dom';
// import { RiArrowDropRightLine } //from 'react-icons/ri'
import SummaryCard from "../Cards/SummaryCard";

 import { SummaryContainer } from "../../elements/screens/mainScreens/costumize/costumize";

const SummarySec =({elements}) =>{

//   const renderData=()=> {
//     return elements.map((element) => {
//        return (
//         <Link to='#'key={element.id}>{element.title} 
//                     <RiArrowDropRightLine size={40}/>
//         </Link>
    
//        )
//     })
//  }

  return (
          <SummaryContainer>
            
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
            
          </SummaryContainer>
  );
}

export default SummarySec;