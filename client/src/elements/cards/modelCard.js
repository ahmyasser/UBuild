import styled from 'styled-components'

import * as color from '../common/colors';



export const ModelCardContainer = styled.div`
    
    height:90%;
    width:32.5%;
    margin-bottom:1.3em;
    display:flex;
    justify-content:center;
    align-items:center;

    a {
        height:100%;
        width:100%;
        border:2px solid ${color.white};
        border-radius:10px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    img {
        height:300px;
        width:100%;
        border-radius:10px 10px 0 0;
    }
    
`