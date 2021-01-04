//import {Link} from 'react-router-dom';
import InspirationsCard from '../../Components/Cards/InspirationsCard'
import {
    InspirationsContainer,
    CardsContainer,
    HeaderContainer
}from '../../elements/screens/mainScreens/home/inspirationsSec'

const Inspirations  = () => {    
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
        <HeaderContainer>
            <p>Browse inspirations for faster innovation</p>
            <small>Pick your favourites & make it your own</small>
        </HeaderContainer>
         <CardsContainer>
            <InspirationsCard obj={obj1}/>
            <InspirationsCard obj={obj2}/>
            <InspirationsCard obj={obj1}/>
            <InspirationsCard obj={obj2}/>
        </CardsContainer>
    </InspirationsContainer> );
}
export default Inspirations;