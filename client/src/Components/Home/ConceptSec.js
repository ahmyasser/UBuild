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
        <h6>Concept</h6>
        <h1>But Tiny Homes are </h1><h1> not trailer homes.</h1>
        
        <p>
            Our goal is to change the way we conceptualize our living space so that it does more for us than we currently imagine it to.
            We aim to create the perfect space that is versatile, efficient, filled to the brim with modern luxuries and amenities, and suited for everyday living or travel. 
            Our vision is to create a solution for your accommodation as flexible as your lifestyle.
        </p>

    </ConceptText>

</ConceptContainer>;
}
export default ConceptSec;