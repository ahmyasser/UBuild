import {Link} from 'react-router-dom';
import { ThankYouBox } from '../../elements/screens/mainScreens/summary';
import {
//    EmailShareButton,
    FacebookShareButton,
  //  WhatsappShareButton,
  } from "react-share";

 
 const ThankYou  = ({id}) => {          
     return( 
        <ThankYouBox>
        <div className="thankyouSec">
            <p id="thankyou">Thank you!</p>
            <p id="recieved">Your submission has been recieved</p>
            <p id="contact">A Project expert will contact you in 1-2 Business days</p>
        </div>
        <div>
        <p className="thankyouSec">you can access your customized model with the following link:   
        <Link to={`load/${id}`}>load/{id}</Link>
        </p>
        </div>
        <FacebookShareButton url={`https://github.com/a-ghazy/SKMD/issues`} style={{color:'blue',marginBottom:20}}>share on facebook</FacebookShareButton>

    </ThankYouBox>
    );
 }
 export default ThankYou;