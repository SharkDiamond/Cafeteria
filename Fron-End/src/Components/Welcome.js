import { Button, Col } from 'react-bootstrap';
import React from 'react';
import '../App.css';

export default function Welcome() {
  return (
   <Col lg="4" className='mt-2 mb-4'>

   <div className='segundoColor p-2 rounded center-NavBarra-Categorias justify-content-center '>
        
        <h3 className='mt-1 mx-2 text-dark'>Bienvenido Gabriel</h3><Button  variant='danger' className='rounded-pill mb-1'>Out</Button>
        
    </div>
    
   </Col>
  )
}
