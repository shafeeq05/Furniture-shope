import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Addproduct() {
    const [img,setImg] = useState(null)
    function frmSubmit(event){
        event.preventDefault()
        const frmdata = new FormData(event.target)
        const frmobj = Object.fromEntries(frmdata.entries())
        console.log(frmobj);
        frmobj.img = img
        axios.post('http://localhost:3000/product',frmobj)
    }
    function inputHandle(event){
        const file = event.target.files[0];
        setImg(file)
    }
  return (
    <div>
        <Form onSubmit={frmSubmit} encType="multipart/form-data">
            <input type="text" name='name' required placeholder='product name' />
            <input type="text" name='price' required placeholder='price' />
            <input type="file" onChange={inputHandle} />
            <Button type='submit'>AddProduct</Button>
        </Form>
       
    </div>
  )
}
