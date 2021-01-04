import styled from 'styled-components'

import * as color from '../../../common/colors';


export const InspirationsContainer = styled.section`
    width: 100%;
    margin:auto;
    margin-bottom:30px;
    padding-bottom:30px;
    display: flex;
    flex-direction:column;
    background-color: ${color.bg};
    border: 3px solid ${color.white}; 
    .wrapper {
        width:90%;    
    }
    .title {
        margin-left:30px;
        margin-bottom:20px;
        font-size:3em;
        font-weight:300;
    }
 `
export const CardsContainer = styled.div`
    width: 95%;
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
`

export const HeaderContainer = styled.div`
    width: 100%;
    p {
        font-size:40px;
        font-weight:200;
        line-height:0;
    }
   
`
