import { Link } from "react-router-dom";
import {
    ImageSecContainer, 
    ImageSecContent,
    ButtonContainer
    } from '../../elements/screens/mainScreens/home/imageSec'
    

const ImageSec  = () => {          
    return (
    <ImageSecContainer>
      <ImageSecContent>
            <div>
                <p> 
                    <span className="highlight"> Tiny but mighty homes,</span><br/>
                    ready to settle anywhere.
                </p>
            </div>
            <small className="highlight">
                Get a fully prefab home or ADU, Fully turn-key service. Starting at $38,500.
            </small>
        </ImageSecContent>
        
        <ButtonContainer >
            <Link to="/models" className="highlight">Build Your Home</Link>
        </ButtonContainer>
    </ImageSecContainer>

);
}
export default ImageSec;