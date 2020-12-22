//import {Link} from 'react-router-dom';

import {
HomeContainer
} from '../../elements/home/home'

import ImageSec from '../../Components/Home/ImageSec'
import AboutSec from '../../Components/Home/AboutSec'
import ConceptSec from '../../Components/Home/ConceptSec'
import InspiredSec from '../../Components/Home/InspiredSec'

const Home  = () => {          
    return <HomeContainer>
            <ImageSec/>
            <AboutSec/>
            <ConceptSec/>
            <InspiredSec/>
        </HomeContainer> ;
}
export default Home;