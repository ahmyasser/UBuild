import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {db, auth} from '../../firebaseConfig';

import { 
  GetStartedContainer 
} from "../../elements/screens/mainScreens/costumize/costumize";

const GetStarted =({setCategory, category, setElements , setItem, setElement}) =>{
  
  const [categoryItems, setCategoryItems] = useState([])
  const [itemsToElementsMap] = useState({}) 
  
  
  
  
  useEffect(() => {
    const fetchData =async()=>{
      try {  
        await auth.signInAnonymously()
   
      const response=db.collection(category);
      const data= await response.get();
      data.docs.forEach(item=> {
        if(item.id === category){
          (item.data().collections)? setCategoryItems(item.data().collections):setCategoryItems([]);
        }
        else{
          //temp.push({[item.id]: item.data().collections})
          itemsToElementsMap[item.id]=item.data().collections
        }
      }) 
    } catch(error){
        console.log(error);
      }
               
    }
    fetchData(); 
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])
  
  const changeCategory =(category)=>{
    setCategory(category);
    setElements([]);
    setElement('');
  }
  const onClick =(item)=>{
    setElements(itemsToElementsMap[item]);
    setItem(item);
    setCategory(category);
    setElement('');
  };

  const renderCategoriesItems = () => {
    return categoryItems.map((item) => {
    return (
      <Link onClick={()=>onClick(item)} key={item} to='#'>{item}</Link>
        )
    })
    
  }
return (
          <GetStartedContainer>
            
            <div className="getStarted">  
              <p className='title'> Get Started</p>
              
              <div className='container'>
                <div className='categories'>
                  <Link className={category==='Economic'? 'active':''} 
                    onClick = {()=>changeCategory('Economic') }
                    to='#'>Economic</Link>
                  <Link className={category==='Standard'? 'active':''} 
                    onClick = {()=>changeCategory('Standard')}
                    to='#'>Standard</Link>
                  <Link className={category==='Luxury'? 'active':''} 
                    onClick = {()=>changeCategory('Luxury')}
                    to='#'>Luxury</Link>
                </div>
              
                <div className='types'>
                  {renderCategoriesItems()}
                </div>
              </div>
            </div>
            <div className="customize"></div>
          </GetStartedContainer>


  );
}

export default GetStarted;