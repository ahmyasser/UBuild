import styled from 'styled-components'

import * as color from '../../../common/colors';


export const CostumizeContainer = styled.div`
    width: 100%;
    height:auto;

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
`

export const UnityContainer = styled.div`
    width: 69%;
    .my-unity-app {
        border-radius:15px;
    }
       
 `

export const CostumizeSection = styled.div`
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
    border-radius:15px;
    margin:4% 0;
}    
  
.categories {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    border-bottom: 1px red solid;
    padding:10px 20px; 

    a {
        font-weight:300;
        margin:3% 0;
        font-size:13px;
    }
    
}
.types{
    display:flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    padding:6px 0px; 
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

export const CustomizeContainer = styled.div`

a {
        color:black;
        padding:2px;
    }

    div {
        border-radius:15px;
        display:flex;
        flex-direction:column;
        background-color:white;
    }
    `