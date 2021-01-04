import styled from 'styled-components'

import * as color from './colors';

export const FooterContainer = styled.footer`
    width: 100%;
    height: 50vh;
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
    margin-left: 27%;
    border-right: 1px solid ${color.white};
    border-left: 1px solid ${color.white};
    .article {
        margin-left: 13%;
        margin-right: 13%;
        margin-top: 15%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
    }
    .title {
        text-align: center;
        font-size:18px;
        font-weight:900;
        color:${color.darkRed};
        line-height: 1;
        
    }
    .content {
        font-size:12px;
        font-weight:thin;
        line-height: 2;
    }    
    `

export const LinksContainer = styled.div`
    width: 100%;
    display: flex; 
    margin-right:27%;
    div {
            display: flex; 
            flex-direction: column;
        }
        p {
            margin:0;
            font-size:12px;
            font-weight:700;
            line-height: 3;
            color:${color.darkRed};
        }
    
        a {
            color:${color.red};
            font-size:12px;
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