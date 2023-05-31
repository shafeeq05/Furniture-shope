import React from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
    function formSubmit(event){
        event.preventDefault()
        const frmjson = new FormData(event.target)
        const formdata= Object.fromEntries(frmjson.entries())
        console.log(formdata);
        formdata.cart=[]
        axios.post('http://localhost:3000/users',formdata)
        .then((res)=>{console.log(res)
          navigate('/login')
        })
    }
    
  return (
    <>
    <div>
        <Form onSubmit={formSubmit}>
            <Form.Control type='text' placeholder='Name' name='name' required />
            <Form.Control type='text' placeholder='Username' name='username' required />
            <Form.Control type='tel' placeholder='Phone number' name='phoneno' required  pattern='^[7-9][0-9]{9}$' />
            <Form.Control type='email' placeholder='email' name='email' required  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'/> 
            <Form.Control type='password' placeholder='Enter password' name='password' required minLength={5} />
            <Form.Control type='password' placeholder='Conform password' name='cnfpassword' required />
            <Button type='submit'>Register</Button>
        </Form>
    </div>
    </>
  )
}
