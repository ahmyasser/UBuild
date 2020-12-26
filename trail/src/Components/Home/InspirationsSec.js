//import {Link} from 'react-router-dom';
import {
   InspirationsContainer,
   CardsContainer
    } from '../../elements/home/inspirationsSec';

import InspirationsCard from '../InspirationsCard'

const InspirationsSec  = () => {          
const obj1={
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Affordable Fran',
    category:'Economic',
    price:7600
};
const obj2={
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1334&q=80',
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