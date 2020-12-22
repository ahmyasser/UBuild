//import {Link} from 'react-router-dom';
import {
    ImageSecContainer, 
    ImageSecContent,
    ButtonContainer
    } from '../../elements/home/imageSec'
    

const ImageSec  = () => {          
    return <div>
    <ImageSecContainer>
    <ImageSecContent>
            <div>
            <p> <span className="highlight"> Tiny but mighty homes,</span></p>
            <p>ready to settle anywhere.</p>
            </div>
            <small className="highlight">Get a fully prefab home or ADU, Fully turn-key service. Starting at $30,000.</small>
    </ImageSecContent>
    <ButtonContainer ><button className="highlight">Build Your Home</button></ButtonContainer>

    </ImageSecContainer> 
    
    
    </div>;
}
export default ImageSec;