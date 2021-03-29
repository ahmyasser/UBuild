import styled from 'styled-components'
import * as color from '../../common/colors';


export const MapContainer = styled.div`

    div {
        overflow:visible !important;
        
    }

`




export const LocationContainer = styled.div`    
    height:100%;
    width:100%;
    padding-top:70px;
    padding-bottom:50px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    background-color:${color.bg};
    .title {
        font-weight:300;
        font-size:30px;
        width:45%;
        text-align:center;
    }
    .mapLocationsWrapper{
        width:90%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        .locationLink
        {
            background-color:${color.white};
            margin:20px;
            padding:20px;
            padding-bottom:40px;
            border-radius:15px;
            a {
                color:black;
            }
        }
        .locationLink2
        {
            background-color:${color.red};
            margin:20px;
            padding:20px;
            padding-bottom:40px;
            border-radius:15px;
            a {
                color:white;
            }
        }

        .locationLink: hover{
            background-color:${color.red};
            a {
                color:white;
            }
        }
        
            
    }
`

