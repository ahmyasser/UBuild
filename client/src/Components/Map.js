import GoogleMapReact from 'google-map-react';
import { MapContainer } from '../elements/screens/secondaryScreens/location';
import { FaMapMarkerAlt } from 'react-icons/fa'
const Marker = () => {
    return <div className="SuperAwesomePin"><FaMapMarkerAlt color="red" size={30}/></div>
  }
const Map= ({Coord})=>{
//{lat:33.825710,lng:-116.402760}          
return <div  style={{ width: 730,borderRadius:15  }}>
            <MapContainer>
                    <GoogleMapReact
                        style={{ height: 400 }}
                        resetBoundsOnResize
                        bootstrapURLKeys={{key:'AIzaSyB_d1jNx0WarW_xnezeizkM4YlKJgfP9Pk'}}
                        center={Coord?{lat:33.825710,lng:-116.402760}:{lat:33.974760,lng:-118.245520}}
                        defaultZoom={15}
                    >
                          <Marker/>
                        </GoogleMapReact>  
                </MapContainer>    
                </div>  
}
export default Map;