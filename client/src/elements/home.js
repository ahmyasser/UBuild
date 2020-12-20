import styled from 'styled-components'

//import * as color from './colors';

import imgsec from '../Assets/Images/car.jpg'

export const HomeContainer = styled.div`
    width: 100%;
    margin:auto;
 `

export const ImageSecContainer = styled.section`
    width: 100%;
    position: absolute;
    top: 0px;
    height:100vh;
    background-image: url(${imgsec});
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
`    
export const ImageSecContent = styled.section`
   
    position: absolute;
    top: 55vh;
    left:20vh;
    
    .highlight {
        background-color:red;
        margin:0;
        padding:0;
        width:63vh;
    }
p {
    margin:auto;
    color:white;
    font-size:6vh;
    font-weight:200;
    
}
small {
    background-color:red;
    color:white;
    font-size:2vh;
    font-weight:300;
}

div {
    height:20vh;
}

`