import { Button, Col } from 'react-bootstrap';
import React from 'react';
import '../App.css';

export default function InsertData() {
  return (
      
    <Col lg="4" className=' pt-4 segundoColor rounded tamanoPanelData'>

   

           <nav className='text-center pt-2'>
            
            <Button className='m-2'>Usuario</Button> 
            <Button className='m-2'>Categoria</Button> 
            <Button className='m-2'>Producto</Button>
           
           </nav>
        
   
    
    </Col>
  )
}
