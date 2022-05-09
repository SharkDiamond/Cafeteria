import { Col,Row } from 'react-bootstrap';
import Grafica from './Grafica';
import React from 'react';
import '../App.css';


export default function PanelShowData() {
  return (
    <Col lg="7" className='tamanoPanelData me-5'>

        <Row className=''>


          <Col lg="6" className='segundoColor rounded-start'>

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

          <Col lg="6" className='segundoColor rounded-end'>
  
            <Grafica/>

          </Col>
      
    </Row>

    </Col>
  )
}
