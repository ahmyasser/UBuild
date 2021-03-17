import styled from 'styled-components'

import * as color from '../common/colors';


export const CardContainer = styled.div`
width: 48vw;
height:120px;
margin:15px;
border-radius:14px;
padding:10px;
background-color:${color.white};
display:flex;
justify-content:center;
align-items:center;
.image {
    width:130px ;
    height:90%;
    background-color:#2d95d2;
}
.info{
    width:80vh;
}
p {
    line-height:0;
}
.item{
    line-height:1;
    font-weight:600;
    font-size:15px;
}
.modelName{
    font-size:12px;
    font-weight:400;
}
.size {
    font-weight:700;
    font-size:18px;
}
.price{
    position:relative;
    left:85%;
    font-weight:700;
    font-size:18px;
}
`
