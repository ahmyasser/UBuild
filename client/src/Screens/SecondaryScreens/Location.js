import Map from '../../Components/Map'
import {LocationContainer} from '../../elements/screens/secondaryScreens/location'  
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Location= ()=>{

    const [Coord, setCoord] = useState(false)
  
  return  <LocationContainer>
        <p className='title'>Our Contarctor Partners</p>
            <div className="mapLocationsWrapper"> 
                <Map Coord={Coord}/>
                <div>
                    <div className={Coord?"locationLink":"locationLink2"}  onClick={()=>setCoord(false)}>
                    <Link to="#">
                        <p>Jon Allen Construction</p>
                        <small>242 E Florence Ave, Los Angeles, CA, 90001</small>
                    </Link>
                    </div>
                    <div className={Coord?"locationLink2":"locationLink"} onClick={()=>setCoord(true)}>
                    <Link to="#" >
                        <p>Cheeky Monkey Tiny Houses</p>
                        <small>72-135 Woburn Ct, Thousand Palms, CA, 92276</small>
                    </Link>
                    </div>
                </div>
            </div>
        </LocationContainer>  ;
}
export default Location;