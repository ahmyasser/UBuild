import styled from 'styled-components'

import * as color from './colors';


export const FinancesContainer = styled.div`
    width: 100%;
    height: 840px;
    background-color: ${color.bg};

    .container { 
       p {  margin:120px;
            font-weight:200;
            font-size:32px;
        }
       margin-bottom:50px;

    }
    .table {   
        float:left;
        width:1000px;
        border: 1px solid ${color.white};
        
    }
    .wrapper {
        height: 90px;
        display:flex;
        border: 2px solid ${color.white};
    }
    .logo {
        height:100%;
        width:400px;
        border-right: 3px solid ${color.white};
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            margin-left:40px;
            height:28px;
        }
        
    }
    .link{
        height:100%;
        width:700px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
      
        a  {
           text-decoration: underline;
            color: ${color.darkRed};
            font-size:30px;
            font-weight:200;
            margin-left:10%;
        }
    }

   
`
