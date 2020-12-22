import styled from 'styled-components'

import * as color from '../colors';


export const AboutContainer = styled.div`
    width: 100%;
    height: 60vh;
    padding-top:5vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .border {
        width:70em;
        height:15em;
        border: 2px solid ${color.red}; 
        border-radius:0.5em;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
           
        .border {
            width:69.5em;
            height:14.5em;
            .border {
                width:69em;
                height:14em;

                .border {
                    width:68.5em;
                    height:13.5em;

                    text-align:center;
                    
                    h1{
                        margin:0;
                    }
                    
                    div {
                        width:55%;
                    }
                }

            }
        }
    }
    
 `
