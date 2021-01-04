import styled from 'styled-components'

import * as color from '../../../common/colors';


export const AboutContainer = styled.div`
    width: 100%;
    height: 28em;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    .title {
        margin-top: 3em;
        font-size:18px;
        font-weight:400;
    }
    .border {
        width:1100px;
        height:290px;
        border: 2px solid ${color.white}; 
        border-radius:0.5em;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;     
        .border {
            width:1085px;
            height:275px;
            .border {
                width:1070px;
                height:260px;

                .border {
                    width:1055px;
                    height:245px;
                    text-align:center;
                    
                    b{
                        padding:2% 1%;
                        line-height: 1;
                        font-size:40px;
                        font-weight:500;
                    }
                   
                    p{

                    }
                    div {
                        width:630px;
                    }
                }

            }
        }
    }
   
@media screen and (min-width: 900px) {
    b {
      margin:0 10%;
    }
  }
    
 `
