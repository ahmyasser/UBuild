//import {Link} from 'react-router-dom';
import {
   InspirationsContainer,
   CardsContainer
    } from '../../elements/screens/mainScreens/home/inspirationsSec';

import InspirationsCard from '../Cards/InspirationsCard'

const InspirationsSec  = () => {          
const obj1={
    image: '',
    name: 'Affordable Fran',
    category:'Economic',
    price:7600
};
const obj2={
    image: '',
    name: 'Vegan Paradise',
    category:'Luxury',
    price:10600
};

    return(
    <InspirationsContainer>
        <div className='wrapper'>
            <p className='title'>Get Inspired</p>
            <CardsContainer>
                <InspirationsCard obj={obj1}/>
                <InspirationsCard obj={obj2}/>
            </CardsContainer>
        </div>
    </InspirationsContainer>
    );
}
export default InspirationsSec;