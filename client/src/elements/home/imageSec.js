import styled from 'styled-components'

import * as color from '../colors';

import imgsec from '../../Assets/Images/car.jpg'

export const ImageSecContainer = styled.section`
width: 100%;
height:50em;
background-image: url(${imgsec});
background-position: center;
background-repeat: no-repeat; 
background-size: cover;
.highlight {
    background-color:${color.red};   
}

`    
export const ImageSecContent = styled.div`

position: absolute;
top: 28em;
left:7.6em;

p {
margin:auto;
color:white;
font-size:3.5em;
font-weight:200;

}
small {
color:white;
font-size:1.1em;
font-weight:300;
}

div {
height:10em;
margin-bottom:0.2em;
}


`
export const ButtonContainer = styled.div`

position: absolute;
top: 42em;
left:44.6%;
button {
color: ${color.white};
border: 2px solid red;
padding:23px 31px;
border-radius: 0.3em;

}
button: hover {
 border-radius: 0.7em;

}

`