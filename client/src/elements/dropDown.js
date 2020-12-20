import styled from 'styled-components'

import * as color from './colors';


export const DropDownContainer = styled.div`
    margin: auto;    
    width: 100%%;
    height:7vh;
    border: ${props => props.Home ?'none':`1px solid ${color.darkRed}`}; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color:${props => props.Home ? color.red:color.bg};
    a {
        border-right: 1px solid ${props => props.Home ? color.white:color.black}; 
        line-height: 10vh;
        padding-top:0.5vh;
        width: 10%;
        text-align: center;  
        color:${props => props.Home ? color.white:color.black};
    }
`
