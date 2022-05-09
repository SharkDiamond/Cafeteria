import { Button, Col } from 'react-bootstrap';
import React from 'react';
import '../App.css';

export default function Welcome() {
  return (
   <Col lg="4" className='pt-2 pb-2 mb-5 text-center rounded segundoColor center-NavBarra-Categorias'>

        <p className='text-dark d-inline me-2 h3'>Bienvenido Gabriel</p><Button  variant='danger' className='rounded-pill d-inline'>Out</Button>
   
   </Col>
  )
}
