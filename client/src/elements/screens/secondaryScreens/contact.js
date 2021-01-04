import styled from 'styled-components'

import * as color from '../../common/colors';


export const ContactContainer = styled.div`

width: 100%;
height: 150vh;
background-color: ${color.bg};

.container {
    margin:135px; 
    p { 
        margin:30px; 
        margin-bottom:80px;
        font-weight:300;
        font-size:32px;
        
     }
    margin-bottom:20px;

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
        font-size:18px;
        font-weight:500;
      }
      
    #message {
        height:200px;
        border:none;
    }

    
   
}
.actionContainer{
    width:62%;
    display:flex;
    justify-content:flex-end;
    button {
        background-color: ${color.darkRed};
        color: ${color.white};
        font-size:13px;
        border: 2px solid red;
        padding:0 45px;
        border-radius: 7px;
    }
    p {
        margin-left: 25px;
        font-size:16px;
        font-weight:500;
        color: ${color.red};
        visibility:${props => props.Success ? 'visible' :'hidden' }; ;
    }
    
}

 
`;