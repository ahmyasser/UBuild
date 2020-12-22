import styled from 'styled-components'
import * as color from '../colors';

import graphic from '../../Assets/Images/graphic.jpg';


export const ConceptContainer = styled.div`
    width: 93%;
    height: 500px;
    background-color: ${color.white};
    float:left;
    display:flex;
    border-radius:13px;
    margin-bottom:50px;
    `
export const ConceptText = styled.div`
    width: 31%;
    
    `

export const ConceptPic = styled.div`
        width: 69%;
        height:80%;
        background-image: url(${graphic});
        background-position: center;
        background-repeat: no-repeat; 
        background-size: cover;
        div { 
          img{
              float:right;
              padding:10px;
              height:300px;
              border:1px solid black;
          }      
        }
    
    `
