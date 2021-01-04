import styled from 'styled-components'

import * as color from '../../common/colors';


export const ModelsScreenContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${color.bg};
    
    .title{
    
        text-align:center;
        p {
            font-size:3em;
            font-weight:200;
            margin-top:20vh;
            margin-bottom:1vh;
        }
        small {
            font-weight:500;

        }
    }   
`

export const ModelsContainer = styled.div`
    width: 100%;
    border-top: 4px solid ${color.white};
    margin-top:4em;
    padding-top:4em;
    padding-bottom:4em;
    display:flex;
    justify-content:center;
    align-items:center;
    .wrapper {
        display:flex;
        justify-content:center;
        flex-wrap: wrap;
        align-items:center;
        width:80%;
    }
     
`
