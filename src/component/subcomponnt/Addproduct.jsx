import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Addproduct() {
    
    useEffect(()=>{
        axios.get('http://localhost:3000/product').then((res)=>{
            setAximg(res.data)
        })
    },[])
   
    function frmSubmit(event){
        event.preventDefault()
        const frmdata = new FormData(event.target)
        const frmobj = Object.fromEntries(frmdata.entries())
        console.log(frmobj);
        
        // console.log(frmobj);
        axios.post('http://localhost:3000/product',frmobj)
        
    }
   
    
  return (
    <div>
        <Form onSubmit={frmSubmit}>
            <input type="text" name='name' required placeholder='product name' />
            <input type="text" name='price' required placeholder='price' />
            <input type='text' name='cat' required placeholder='category' />
            <input type="text" name='url' placeholder='img url' />
            <Button type='submit'>AddProduct</Button>
        </Form>
      
         {/* <img src={URL.createObjectURL(ele.image)} alt="" /> */}
      
    </div>
  )
}
