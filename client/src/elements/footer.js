import styled from 'styled-components'

import * as color from './colors';

export const FooterContainer = styled.footer`
    width: 100%;
    display: grid;
    grid-template-columns: 10% 20% 20% 50%;
    background: ${color.bg };
    align-items: stretch;
    border: 1px solid ${color.white}; 
    
    `
export const ArticleContainer = styled.div`
    width: 100%;
    border: 1px solid ${color.white}; 
    
   
    `

export const LinksContainer = styled.div`
    width: 100%;
    display: flex; 
    
    div {
        display: flex; 
        flex-direction: column;
    }
   
    `


export const SocialContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
background-color:blue;
div {
    background-color:red;
    div {
       display: flex; 
       justify-content: space-between;
    }
}

`