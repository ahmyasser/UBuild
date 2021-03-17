import styled from 'styled-components'

import * as color from '../../../common/colors';

import imgsec from '../../../../Assets/Images/landing.png'

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
    left:7.6%;
    color: ${color.white};
    
    div {
        height:10em;
        margin-bottom:0.2em;
    }
   
    p {
        margin:auto;
        font-size:3.5em;
        font-weight:200;
    }
    small {
        font-size:1.1em;
        font-weight:300;
    }

`
export const ButtonContainer = styled.div`
    position: absolute;
    top: 43em;
    left:50%;
    transform: translate(-50%, -50%);
    a {
        color: ${color.white};
        border: 2px solid red;
        padding:20px 25px;
        line-height:4;
        border-radius: 0.5em;

    }
    a: hover {
        border-radius: 0.3em;
        padding:22px 27px;

    }

`