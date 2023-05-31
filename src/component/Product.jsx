import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card,Button, CardGroup,Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


export default function Product() {
  const [exist,setExist] = useState(true)

  function addCart(ele){
    axios.get('http://localhost:3000/users').then((res)=>{
      res.data.map((usr)=>{
        if(localStorage.getItem('login')==usr.id){
         let ex = usr.cart.filter((cart,i)=>{
          if(cart.id==ele.id){ 
            usr.cart[i].count=cart.count+1
            axios.put(`http://localhost:3000/users/${usr.id}`,usr)
          }
          return cart.id==ele.id
           
            
          })
          console.log(ex.length);
          if(ex.length){
           console.log("sdjkafnjk");
          }else{
                ele.count=1
                usr.cart.push(ele)
                axios.put(`http://localhost:3000/users/${usr.id}`,usr)
          }
          
        }
        
      })
    })
    
  }
const [product,setProduct] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/product')
    .then((res)=>{
      // console.log(res.data);
     setProduct(res.data)
    })
  },[])


    const session = localStorage.getItem('login')
 
  return (
    <>
    {!session?
    <div>please login</div>:
    <>
    <div>Product</div>
    <Row xs={1} md={2} className="g-4">
    {product.map((ele)=>(
      <CardGroup style={{ width: '18rem' }} key={ele.id}>
      <Card  >
      <Card.Img  srcSet={ele.url} variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{ele.name}</Card.Title>
        <Card.Text>
          {ele.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>addCart(ele)}>Add to cart</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    ))}
    </Row>
    </>
    }
    </>

  )
}
