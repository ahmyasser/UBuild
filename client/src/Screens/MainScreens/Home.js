//import {Link} from 'react-router-dom';

import {
HomeContainer
} from '../../elements/screens/mainScreens/home/home'

import ImageSec from '../../Components/Home/ImageSec'
import AboutSec from '../../Components/Home/AboutSec'
import ConceptSec from '../../Components/Home/ConceptSec'
import InspirationsSec from '../../Components/Home/InspirationsSec'

const Home  = () => {          
    return <HomeContainer>
            <ImageSec/>
            <AboutSec/>
            <ConceptSec/>
            <InspirationsSec/>
        </HomeContainer> ;
}
export default Home;