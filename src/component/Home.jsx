import React,{useContext, useEffect, useState} from "react";

import { Button, Container, Navbar, Nav,Image, Col,Row,Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cover from '../assets/cover.png'
import axios from "axios";

export default function Home() {
  const [img,setImg]= useState([])
useEffect(()=>{
axios.get('http://localhost:3000/product').then((res)=>{
setImg(res.data)
})
},[])
  return (
    <>
      <header className="bg-success sticky-sm-top">

        <div className="catagories">
          <NavLink className='text-decoration-none'>Sofa</NavLink>
          <NavLink>Chair</NavLink>
          <NavLink>Mattresses</NavLink>
          <NavLink>Tables</NavLink>
          <NavLink>Cupbord</NavLink>
        </div>
      </header>
      <section>
      <div className="d-flex flex-column align-items-center p-3">
      <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-180"
          src={cover}
          fluid style={{ height: '40vh', width: '180vh' }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-180"
          src={cover}
          fluid style={{ height: '40vh', width: '180vh' }}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-180"
          src={cover}
          fluid style={{ height: '40vh', width: '180vh' }}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        
       
          {/* <Image src={cover} fluid style={{ height: '40vh', width: '180vh' }} />
         
          <h3 className="p-3">Shop By Categories </h3> */}
        </div>
        </section> 
        <article>
          <Row xs={1} md={4} className="g-4">
            {img.map((ele)=>(
              <img src={ele.url} alt="img" srcset="" className="h-25 w-25" />
            ))}
          </Row>
        </article>
    </>
  );
}



