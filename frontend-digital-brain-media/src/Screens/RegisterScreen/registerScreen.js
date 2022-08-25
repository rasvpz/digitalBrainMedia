import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import Input from '../../Components/Input'
import axios from 'axios'


const registerScreen = (props) => {
const [name, setName]=useState('')
const [email, setemail]=useState('')
const [phone, setphone]=useState('')
const [password, setpassword]=useState('')

  const submitForm = (e) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    e.preventDefault()
      const obj= {name, email, phone, password}
      alert(obj)
      axios.post('http://localhost:4000/register',
      obj,config)
      }

    
  
  return (
    <div>
    <br/><br /><br /><br /><br />
    <form onSubmit={submitForm}  style={{width: '50%', marginLeft: '25%'}}>

                    
                <h3>{props.userRegistered ? 'Please Login' : 'Please Register'}</h3>               
    
                {!props.userRegistered  && (    
                  <Form.Control   
                  Input type="text" placeholder="Name" name='name' id='fname' onChange={(e)=> setName(e.target.value)} />
                )}
                <Form.Control Input type="email" placeholder="Email" name='email' id='femail' onChange={(e)=> setemail(e.target.value)} />

                {!props.userRegistered  && ( 
                  <Form.Control Input type="text" placeholder="phone" name='phone' id='fphone' onChange={(e)=> setphone(e.target.value)}/> 
                )}

                <Form.Control Input type="password" placeholder="Password" name='password' id='fpassword' onChange={(e)=> setpassword(e.target.value)}/>

                {!props.userRegistered  && (      
                  <Form.Control Input type="password" placeholder="Confirm Password" />
                )}
                <Form.Control Button type="submit" className="registerbtn btn-info" value={props.userRegistered ? 'Login' : 'Register'} />
		      
    </form>
    </div>
  )
}

export default registerScreen
