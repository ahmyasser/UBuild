//import {Link} from 'react-router-dom';

import {
HomeContainer
} from '../../elements/home'

import ImageSec from '../../Components/Home/ImageSec'
import AboutSec from '../../Components/Home/AboutSec'
import ConceptSec from '../../Components/Home/ConceptSec'

const Home  = () => {          
    return <HomeContainer>
            <ImageSec/>
            <AboutSec/>
            <ConceptSec/>
        </HomeContainer> ;
}
export default Home;