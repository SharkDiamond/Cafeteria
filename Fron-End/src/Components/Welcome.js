import { Button, Col, Row } from 'react-bootstrap';
import React from 'react';
import '../App.css';

export default function Welcome() {
  return (
   <Col lg="4" className='pt-2 pb-2 mb-5 rounded segundoColor'>

        <nav className='center-items-nav'>

          <p className='text-dark h3 mt-2 me-2'>Bienvenido {sessionStorage.getItem('Username')}</p>
     
          <Button  variant='danger' className='rounded-pill'>Out</Button>
    
        </nav>
        
   </Col>
  )
}
