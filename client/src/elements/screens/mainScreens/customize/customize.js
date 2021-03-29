import styled from 'styled-components'

import * as color from '../../../common/colors';


export const CustomizeContainer = styled.div`
    width: 100%;
    height:auto;
    min-height:150vh;
    background-color: ${color.bg};
    .wrapper{
        width:90%;
    }
 `
export const Header = styled.div`
margin:6.5em 0 2em 3em;
text-align:left;
p {
    font-size:45px;
    font-weight:200;
    margin:0;
}
span{
    color:${color.darkRed};
}
`
export const MidSection = styled.div`
    display:flex;
    height:auto;
    flex-wrap:stretch;
    justify-content:flex-start;
    align-items:flex-start;
   
`

export const UnityContainer = styled.div`
height:92vh;  
width: 74%;
    .my-unity-app {
        border-radius:15px;
    }
       
 `

export const CustomizeSection = styled.div`
    height:92vh;
    width:23%;
    a {
        color:black;
    }
    .title{
        font-weight:700;
        font-size:18px;
        line-height:1;
    }
    
    `

export const GetStartedContainer = styled.div`

.container{
    background-color: white;
    border-radius:20px;
    margin:4% 0;
}    
  
.categories {
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    border-bottom: 1px red solid;
    height:36px;
    a {
        padding-top:10px;
        text-align:center;
        font-weight:300;
        font-size:13px;
        height:100%;
        width:33.3333%;
        color:black;
    }
    
    .active {
        color:white;
        background-color:red;
    }    
}
.types{
    display:flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    padding:2px 0px; 
    a {
        font-weight:200;
        margin:2% 5%;
        font-size:13px;
        padding:7px;
        border: 1px #00000029 solid;
        border-radius:15px;
    }
    
}

`

export const CustomizeSecContainer = styled.div`
    overflow:visible; 
    a {
        text-align:center;
        color:black;
        padding:1px 25px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        border-bottom: 1px ${color.bg} solid;
    }

    div {
        overflow-x:hidden;
        overflow-y: auto;
        max-height:39vh;
        border-radius:15px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background-color:white;
    }
    #CustomizeData{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
    }
    #CustomizeElement{
        margin:10px 0px;
        width:80%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    `

    export const SummaryContainer = styled.div`
        margin-top:-5%;
        margin-bottom:5%;
        width:57vw;
    `
    
    export const AddToCart = styled.div`

        width:27vw;
        height:8vh;
        background-color: ${color.white};
        z-index: 100;
        position: fixed;
        top:90vh;
        left:65vw;
        display:flex;
        align-items:center;
        border-radius:10px;            
        a {
            height:85%;
            width:55%;
            margin-left:5px;
            background-color: ${color.red};
            font-size:10px;
            color:${color.white};
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:10px;
            box-shadow: 0px 3px 6px #00000029;            
        }
        p {
            margin-left:15px;
            color:${color.darkRed};
            font-weight:700;
            font-size:20px;
        }
    
    `