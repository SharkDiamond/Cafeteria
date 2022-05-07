import { Col,Row } from 'react-bootstrap';
import Grafica from './Grafica';
import React from 'react';
import '../App.css';


export default function PanelShowData() {
  return (
    <Col lg="8" className='p-4 '>

    <Row className='  tamanoPanelData'>

      
        <Col lg="6" className='segundoColor rounded'>

            <ul>

                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>
                <li className='h3'>PRODUCTO 1</li>

            </ul>

        </Col>

        <Col lg="6" className='segundoColor rounded'>
  
            <Grafica/>

        </Col>
      
    </Row>

    </Col>
  )
}
