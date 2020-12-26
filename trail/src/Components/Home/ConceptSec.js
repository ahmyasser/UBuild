import {
    ConceptContainer,
    ConceptText,
    ConceptPic
} from '../../elements/home/conceptSec'
import ceoImg from '../../Assets/Images/ceo.jpg';

const ConceptSec  = () => {          
return <ConceptContainer>
    <ConceptPic>
        <div>
            <img src={ceoImg} alt="CEO" />
        </div>

    </ConceptPic>        
    <ConceptText>
        <p className='title'>Concept</p>
        <b>But Tiny Homes are <br/> not trailer homes.</b>
        
        <p className='content'>
            Our goal is to change the way we conceptualize our living <br/>
            space so that it does more for us than we currently imagine<br/> 
            it to. We aim to create the perfect space that is versatile,<br/>
            efficient, filled to the brim with modern luxuries and amenities,<br/>
            and suited for everyday living or travel. Our vision is to create a <br/>
            solution for your accommodation as flexible as your lifestyle.
        </p>

    </ConceptText>

</ConceptContainer>;
}
export default ConceptSec;