import {useState} from 'react';
import {
    ContactContainer
    } from '../../elements/screens/secondaryScreens/contact';

const Contact  = () => {          

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [subject,setSubject] = useState("")
const [message,setMessage] = useState("")
const [success,setSuccess] = useState(false)

return <>
<ContactContainer Success={success}>
    <div className='container'>
    <div className='title'>
        <p>Got a Question? We are here to help !</p>
    </div>
    <form className='body'>
    <input
      type="text"
      placeholder="NAME*"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

    <input
      type="text"
      placeholder="EMAIL*"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />

    <input
      type="text"
      placeholder="SUBJECT"
      value={subject}
      onChange={(e)=>setSubject(e.target.value)}
      />

    <input
      type="text"
      placeholder="MESSAGE*"
      id='message'
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      />
      
    
    
    </form>
    
    </div>
    <div  className='actionContainer'>

    <button onClick={()=>{/*signup(dispatch,email,subject,name)*/ setSuccess(!success);}}
      >Send</button>
    
    <p>Message Successfully Sent!</p>
    </div>
</ContactContainer>
    </> ;
}
export default Contact;