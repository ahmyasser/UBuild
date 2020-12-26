import styled from 'styled-components'

import * as color from './colors';





export const CardContainer = styled.div`
    width: 47%;
    height:180px;
    border: 3px solid ${color.white}; 
    border-radius:20px;
    margin-left:40px;
a {
    width: 100%;
    height:180px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    color:black;
}
a:hover{
    background-color:white;
}
    img {
       height:170px;
       width:60%;
       border-radius:20px;
       margin:5px;
   }
   .content{
    width:40%;
    display:flex;
    flex-direction:column;
    margin-top:-40px;
   }
   h6 {
    background-color:red;
       
       font-size:22px;
       font-weight:600;
   }

`