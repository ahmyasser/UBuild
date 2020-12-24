import styled from 'styled-components'
import * as color from '../colors';

import graphic from '../../Assets/Images/graphic.png';


export const ConceptContainer = styled.div`
    width: 93%;
    height: 530px;
    background-color: ${color.white};
    float:left;
    display:flex;
    border-radius:13px;
    margin-bottom:60px;
    `
export const ConceptText = styled.div`
    width: 38%;
    height:80%;
    .title{
        margin-bottom:30px;
    }
    b {
        font-size:45px;
        font-weight:400;
        line-height:1;

    }
    .content {
        margin-top:30px;
        line-height:2;
    }
    
    `

export const ConceptPic = styled.div`
        width: 62%;
        height:100%;
        margin-right:40px;
        
       
        
        div {
            float:center;
            margin-top:40px; 
            height:80%;
            background-image: url(${graphic});
            background-position: left;
            background-repeat: no-repeat; 
            background-size: cover;  
          img{
              float:right;
             margin-top:30px;
              padding:10px;
              height:280px;
              border:1px solid black;
          }      
        }
    
    `
