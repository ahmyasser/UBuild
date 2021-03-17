import styled from 'styled-components'

import * as color from '../common/colors';



export const ModelCardContainer = styled.div`
    height:70vh;
    width:32.5%;
    margin-bottom:1.3em;
    display:flex;
    justify-content:center;
    align-items:center;
    .content{
        display:flex;
        jusitfy-content:center;
        align-items:center;
        color:black;
    }
    a {
        height:90%;
        border:2px solid ${color.white};
        border-radius:10px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
    a:hover{
        background-color:white;
    }
    img {
        height:280px;
        width:100%;
        border-radius:10px 10px 0 0;
    }
    h6{
        font-weight:600;
        font-size:20px;
        line-height:0;
        margin-right:30px;
    }
    p{
        
    }
    
`