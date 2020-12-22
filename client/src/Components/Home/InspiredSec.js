//import {Link} from 'react-router-dom';
import {
   InspiredContainer,
   CardsContainer
    } from '../../elements/home/inspiredSec';

import InspiredCard from './InspiredCard'

const InspiredSec  = () => {          
const obj1={
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Affordable Fran'
};
const obj2={
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1334&q=80',
    name: 'Vegan Paradise'
};

    return(
    <InspiredContainer>
        <div>
            <p>Get Inspired</p>
            <CardsContainer>
                <InspiredCard obj={obj1}/>
                <InspiredCard obj={obj2}/>
            </CardsContainer>
        </div>
    </InspiredContainer>);
}
export default InspiredSec;