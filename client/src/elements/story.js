import styled from 'styled-components'

import * as color from './colors';

import pinned from '../Assets/Images/pinned.png';


export const StoryContainer = styled.section`
    width: 100%;
    height:1050px;
    margin:auto;
    background-color: ${color.darkRed}; 
    color:white;
    display: flex;
    justify-content: flex-start;
    align-items:flex:start;
    .container {
      float:left;
        width:80%;
        height:90%;
    }
    div {
       float:left;
    }    
 `
 
export const Paragraph1 = styled.div`
   b {
      font-size:28px;
      font-weight: 500;
   }

   p {
      
      font-size:24px;
      font-weight: 300;

   }

   h1 {
      font-size:53px;
      font-weight: 400;
      margin-bottom:-10px;
   }
`
export const Paragraph2 = styled.div`
width:100%;
h2 {
   margin-bottom:-20px;
   margin-top:16px;
   font-size:45px;
   font-weight: 200;
}
p {
   font-weight:400;
   font-size:22px;
   padding-top:14px
   }

`

export const Pinned = styled.div`
z-index: 100;
position: fixed;
top:580px;
left:1160px;
background-image: url(${pinned});
background-position: center;
background-repeat: no-repeat; 
background-size: cover;

height:65px;
width:180px;
   
`
