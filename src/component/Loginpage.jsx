import axios from "axios";
import React,{ useContext }  from "react";
import { Button, Form } from "react-bootstrap";
import { CookiContext } from "../App";
import {useNavigate} from 'react-router-dom';

export default function Loginpage() {
  const {cooki,setCooki} = useContext(CookiContext)
  const navigate = useNavigate()
    function formSubmit(){
        event.preventDefault()
    const jsonform = new FormData(event.target)
    const formdata = Object.fromEntries(jsonform.entries())
    console.log(formdata);
    axios.get('http://localhost:3000/users')
    .then((res)=>{
      res.data.map((elem)=>{
        if(elem.name==formdata.name&&elem.password==formdata.password){
          console.log(elem.name);
          localStorage.setItem('login',elem.id)
          setCooki('Logout')
           navigate('/')
          // elem.login=true
          // console.log(elem);
          // axios.put(`http://localhost:3000/users/${elem.id}`,elem)
        }
      })
    })
    
    }

  return (
    <div className="loginmain">
        
      <Form className="loginform" onSubmit={formSubmit}>
      <Form.Control  type="text" placeholder="Username"  name="name" required  className="input"/>
      <Form.Control type="password" placeholder="password"  name="password" required />
      <Button variant="secondary" type="submit">Login</Button>
      </Form>
      
    </div>
  );
}
