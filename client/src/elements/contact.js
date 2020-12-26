import styled from 'styled-components'

import * as color from './colors';


export const ContactContainer = styled.div`

width: 100%;
height: 840px;
background-color: ${color.bg};

.container {
    margin:135px; 
    p { 
        margin:30px; 
        margin-bottom:80px;
        font-weight:200;
        font-size:32px;
        
     }
    margin-bottom:50px;

 }
 .body {   
    float:left;
    width:860px;
    height:400px;
    border: 2px solid ${color.white};
    border-radius:20px;
    input {
        margin-right:7px;
        background-color:transparent;
        width: 100%;
        height:60px;
        border:none;
        border-bottom: 2px solid ${color.white};
    }
    input::placeholder {
        color: black;
        padding-left: 30px;
        font-size:15px;
      }
      
    #message {
        height:200px;
        border:none;
    }
}

 
`;