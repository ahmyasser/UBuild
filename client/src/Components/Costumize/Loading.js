import { useParams,
         useHistory 
    }  from "react-router-dom";
import {useEffect} from 'react';
import {db} from '../../firebaseConfig';

  
const Loading = () =>{
    let { id } = useParams();
     const history = useHistory();
    useEffect(() => {
        const fetchData =async()=>{
            var docRef = db.collection("customizedModels").doc(id);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    localStorage.setItem('savedCart', doc.data().cart);
                    localStorage.setItem('model', doc.data().model);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
           
            history.push('/customize');
        }
        fetchData();  
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      

return <><h1>Loading</h1>
 <h1>Loading</h1>
 <h1>Loading</h1>
 <h1>Loading {id}</h1>
 <h1>Loading</h1></>
}

export default Loading;