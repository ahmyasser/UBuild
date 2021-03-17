import styled from 'styled-components'
import * as color from '../../common/colors';



export const SummaryContainer = styled.section`
    filter: ${props => props.Blur ? 'blur(8px)':'none' };
    -webkit-filter: ${props => props.Blur ? 'blur(8px)':'none' };;
    width: 100vw;
    padding-top:5%;
    background-color:${color.bg};
    display:flex;
    flex-direction:column;
    justify-content:ceneter;
    align-items:center;
    .title {
        display:flex;
        flex-direction:column;
        justify-content:ceneter;
        align-items:center;
        margin-bottom:5vh;
        p {
            font-size:35px;
            font-weight:300;
            line-height:0;
        }
        small {
            line-height:1;
            font-size:13px;
            font-weight:400;
        }
    }
    
    .model {
        background-color:${color.white};
        width:55vw;
        height:250px;
        margin-bottom:8vh;
        border-radius:12px;
        display:flex;
        justify-content:ceneter;
        align-items:center;    
        .model-pic {
            border-radius:12px;
            margin-left:5%;
            width:55%;
            height:87%;
            background-color:#2d95d2;
        }
        .model-details {
            .name {
                font-size:40px;
                font-weight:300;
                line-height:1;
            }
            .price {
                font-size:40px;
                font-weight:400;
                line-height:0;  
            }
            .tax {
                line-height:0;
                font-size:13px;
                font-weight:400;
                color:${color.darkRed};
            }
            .weight {
                line-height:2;
                font-size:17px;
                font-weight:400;
                span{
                    color:${color.darkRed};
                }
            }
            
        }
    }
    .title2 {
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        height:12vh;
        margin-bottom:10vh;
        border-top:1px solid white;
        font-weight:700;
    }

        
    
 `
 export const OrderNowBox = styled.div`
 z-index: 100;
        position: fixed;
        bottom:0;
        left:75%;
        background-color: white;
        border-top-left-radius:12px;
        width: 15vw;
        height:130px;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        .total {
            width:80%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            color:${color.darkRed};
            font-size:19px;
            font-weight:700;
            line-height:0;
        }
        .tax {
            width:80%;
            font-weight:400;
            font-size:12px;
            line-height:0;
            margin-top:-15px;
            
        }
        a {
            margin-top:20px;
            margin-bottom:10px;
            background-color:red;
            color:white;
            width:80%;
            text-align:center;
            line-height:2;
        }
        a:hover {
            border-radius:12px;
        }
        
    }
 `
 
 export const CheckoutBox = styled.div`
    
    z-index: 100;
    position: fixed;
    bottom:0;
    left:70%;
    background-color: white;
    width: 30vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    input {
        line-height:2.5;
        padding-left:12px ;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 0.5px solid #707070;
        border-radius: 8px;
        opacity: 1;
    }
    .header {
        width:100%;
        padding:10px 0;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        border-bottom:1px solid ${color.bg};
        p{
            font-size:38px;
            font-weight:300;
            line-height:0;
        }
        small{
            font-size:11px;
            font-weight:400;
            line-height:5;
            margin-top:-4vh;
        }
    }
    
    .userInfo{
        border-bottom:1px solid ${color.bg};
        padding-bottom:4vh;
        padding-top:3vh;
        width:84%;
        display: flex;
        flex-wrap:wrap;
        justify-content:flex-start;
        align-items:flex-start;
        .formField{
            margin:2%;
            display:flex;
            flex-direction:column;        
            width:45%;
            label { 
                font-size:10px;
                font-weight:600;
                line-height:2;
            }
        
        }   
    }
    .addressInfo{
        border-bottom:1px solid ${color.bg};
        padding-bottom:4vh;
        padding-top:3vh;
        width:84%;
        display: flex;
        flex-wrap:wrap;
        justify-content:flex-start;
        align-items:center;
        #street{
            width:94%;
        }
        .formField{
            width:42%;
            margin:2% 1%;
        }
    }
    .orderDetails{
        height:30vh;
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
       
    }
    .total {
        width:80%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:${color.darkRed};
        font-size:19px;
        font-weight:700;
        line-height:0;
    }
    .tax {
        width:80%;
        font-weight:400;
        font-size:12px;
        line-height:0;
        margin-top:-15px;
        
    }
    a {
        margin-top:20px;
        margin-bottom:20px;
        background-color:red;
        color:white;
        width:50%;
        text-align:center;
        line-height:3;
        border-radius:5px;
        font-size:13px;
    }
    

 `;
 export const ThankYouBox = styled.div`
    z-index: 100;
    position: fixed;
    bottom:0;
    left:70%;
    background-color: white;
    width: 30vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    .thankyouSec{
        text-align:center;
        #thankyou{
            font-size:35px;
            font-weight:500;

        }
        #recieved{
            font-size:24px;
            font-weight:300;
        }
    }    

 `;
