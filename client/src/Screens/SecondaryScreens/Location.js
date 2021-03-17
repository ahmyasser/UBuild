import GoogleMapReact from 'google-map-react';
import { MapContainer } from '../../elements/screens/secondaryScreens/location';
const Location= ()=>{
          
const lat  = 25.0777213;
const lng = 55.1378448;
// const mapstyle ={
//     width: '70%',
//     height: '50vh',
//     borderRadius: 10,
//     overflow: 'hidden',
// }
return  <div  style={{marginTop:70, width: 400, height: 300 , overflow:'visible !important'}}>
<MapContainer>
                    <GoogleMapReact
                    style={{width: 400, height: 300 , overflow:'visible !important'}}
                        resetBoundsOnResize
                        bootstrapURLKeys={{key:'AIzaSyB_d1jNx0WarW_xnezeizkM4YlKJgfP9Pk'}}
                        defaultCenter={{lat, lng}}
                        defaultZoom={15}
                        onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
                    >
                        </GoogleMapReact>  
                </MapContainer>    
                </div>  ;
}
export default Location;