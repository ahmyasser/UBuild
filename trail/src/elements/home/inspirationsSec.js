import styled from 'styled-components'

import * as color from '../colors';


export const InspirationsContainer = styled.section`
    width: 100%;
    height:340px;
    margin:auto;
    display: flex;
    
    flex-direction:column;
    border: 3px solid ${color.white}; 
    margin-bottom:20px;
    .wrapper {
        width:90%;
        margin-top:-20px;
    }
    .title {
        margin-left:40px;
        margin-bottom:40px;
        font-size:45px;
        font-weight:200;
    }
 `
 export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:space-between;
`
