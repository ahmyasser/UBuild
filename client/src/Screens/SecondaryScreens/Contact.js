import {useState} from 'react';
import {
    ContactContainer
    } from '../../elements/contact';

const Contact  = () => {          

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [subject,setSubject] = useState("")
const [message,setMessage] = useState("")

return <>
<ContactContainer>
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
    <div className='action'>
    <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
      onClick={()=>{/*signup(dispatch,email,subject,name)*/console.log(email);}}
      ></button>
    </div>
    </div>
</ContactContainer>
    </> ;
}
export default Contact;