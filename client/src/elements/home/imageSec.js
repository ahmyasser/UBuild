import styled from 'styled-components'

import * as color from '../colors';

import imgsec from '../../Assets/Images/car.jpg'

export const ImageSecContainer = styled.section`
width: 100%;
height:100vh;
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
top: 55vh;
left:20vh;

p {
margin:auto;
color:white;
font-size:6vh;
font-weight:200;

}
small {
color:white;
font-size:2vh;
font-weight:300;
}

div {
height:20vh;
}


`
export const ButtonContainer = styled.div`

position: absolute;
top: 80vh;
left:44.6%;
button {
color: ${color.white};
border: 2px solid red;
padding:1.5em 2em;
margin-top:20px;
border-radius: 0.3em;

}
button: hover {
 border-radius: 0.7em;

}

`