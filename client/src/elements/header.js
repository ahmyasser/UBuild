import styled from 'styled-components'

import * as color from './colors';

export const NavBar = styled.header`    
z-index: 100;
position: fixed;
width:100%;
`
export const HeaderContainer = styled.header`
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.Home ? "none" :color.bg };
    align-items: stretch;
    border: 1px solid ${props => props.Home ? color.white :color.black}; 
    a {
        color: ${props => props.Home ? color.white :color.black};
        width:25%;       
        font-size: 15px; 
    }
   
    `

export const HeaderLeft = styled.div`
    margin: auto;    
    width: 33%;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        border-right: 1px solid ${props => props.Home ? color.white :color.black}; 
        line-height: 3vh;
        padding-top:0.5vh;
        width: 25%;
        text-align: center;  
    }
`
export const HeaderMid = styled.div`
    margin: auto;    
    width: 33%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: auto;    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:${props=>props.Home?color.darkRed:color.black};
        font-weight: 900;
        font-size:16px;           
    }
    
    a {
        height:100%;
        background-color: ${props=> props.Home? color.bg: 'none'};
        border:  ${props => props.Home ? 'none' :`1px solid ${color.white}`}; 
        width:35%;
        display: flex;
        align-items: center;
    }
     
`
export const HeaderRight = styled.div`
    margin: auto;    
    width: 33%;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        border-left: 1px solid ${props => props.Home ? color.white :color.black}; 
        line-height: 10vh;
        width: 25%;
        text-align: center;
    }

    .summary-icon{
        padding-top:1vh;
    }
`