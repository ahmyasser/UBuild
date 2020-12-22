import styled from 'styled-components'

import * as color from '../colors';


export const InspiredContainer = styled.section`
    width: 100%;
    height:400px;
    margin:auto;
    display: flex;
    
    flex-direction:column;
    border: 3px solid ${color.white}; 
    margin-bottom:20px;
    div {
        width:90%;
        
    }
 `
 

 export const CardsContainer = styled.div`
 width: 100%;
 display: flex;
 align-items:center;
 `

export const CardContainer = styled.div`
width: 50%;
height:100%;
display: flex;
background-color:blue;
border: 3px solid ${color.white}; 

    img {
        height:200px;
        width:350px;
        border-radius:20px;
    }

`