import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardGroup,Card, Button } from 'react-bootstrap'

export default function Cart() {
  const [cart,setCart] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/users').then((res)=>{
      res.data.map((usr)=>{
        if(localStorage.getItem('login')==usr.id){
          // console.log(usr.cart);
          setCart(usr.cart)
        }
      })
    })
  },[])
  const session = localStorage.getItem('login')
  
  return (
    <>
    {!session?<h2>please Login</h2>:
     <>
     <h2>Cart</h2>
    {cart.map((ele)=>(
      <>
     <CardGroup style={{width:'40vh'}} key={ele.id} >
      <Card.Body className='d-flex flex-column align-items-center'>
      <Card.Img srcSet={ele.url}  />
      <Card.Title>{ele.name}</Card.Title>
      <Card.Text>{ele.price}</Card.Text>
      <Button variant='primary'>Buy</Button>
      <Button variant='danger'>Remove</Button>
      </Card.Body>
     </CardGroup>
      </>
    ))}
     </>
    }
    </>
  )
  
}
