import styled from 'styled-components'

import * as color from './colors';

export const FooterContainer = styled.footer`
    width: 100%;
    height: 45vh;
    display: grid;
    grid-template-columns: 30% 70%;
    background: ${color.bg };
    border-top: 6px solid ${color.white}; 
    .footerRight{
        width:100%;
    }
    .footerLinks{
        display:flex;
        justify-content:space-between;        
    }
    .copyright{
        color:${color.red};
        margin-left:15%;
        margin-top:6%;
        font-size:0.75em;
    }
    `

export const ArticleContainer = styled.div`
    width: 60%;
    height: 100%;
    margin-left: 25%;
    border-right: 1px solid ${color.white};
    border-left: 1px solid ${color.white};
    div{
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 15%;
    }
    b {
        font-size:1.13em;
        color:${color.darkRed};
        line-height: 0;
        
    }
    p {
        padding-top:1vh;
        font-size:0.65em;
        font-weight:thin;
        line-height: 2;
    }    
    `

export const LinksContainer = styled.div`
    width: 100%;
    display: flex; 
    margin-right:25em;
    div {
            display: flex; 
            flex-direction: column;
        }
        p {
            margin:0;
            font-size:0.74em;
            font-weight:bold;
            line-height: 3;
            color:${color.darkRed};
        }
    
        a {
            color:${color.red};
            font-size:0.7em;
            line-height: 3;

        }

   
    `


export const SocialContainer = styled.div`
width: 100%;
display: flex; 
justify-content: flex-end;
margin-bottom: 4.5em;
div {
    margin-right:6em;
    div {
        width:100%;
        display: flex; 
        justify-content: space-between;
        margin-top:1.4em;
    }
}

`