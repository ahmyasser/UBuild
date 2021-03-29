import { useParams,
         useHistory 
    }  from "react-router-dom";
import {useEffect} from 'react';
import {db, auth} from '../../firebaseConfig';

  
const Loading = ({setModel}) =>{
    let { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchData =async()=>{
        try {  
            await auth.signInAnonymously()   
            var docRef = db.collection("customizedModels").doc(id);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    setModel(JSON.parse(doc.data().model))
                    localStorage.setItem('savedCart', doc.data().cart);
                    localStorage.setItem('model', doc.data().model);
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
                history.push('/models');
            });
        }catch(error){
            console.log(error);
            history.push('/models');
        }
        history.push('/customize');
        }
        fetchData();
      }, [history, id, setModel])
      

return <>
 <h1>-</h1>
 <h1>-</h1>
 <h1>-</h1>

 <h1>-</h1>
 <h1>-</h1>
 <h1>-</h1>
 <h1>Loading {id}</h1>
 </>
}

export default Loading;