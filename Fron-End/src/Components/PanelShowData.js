import { Col,Row } from 'react-bootstrap';
import Grafica from './Grafica.js';
import React from 'react';
import '../App.css';


export default function PanelShowData() {
  return (
    <Col lg="7" className='tamanoPanelData me-5'>

        <Row className=''>


          <Col lg="6" className='segundoColor rounded-start pt-4 pb-4 tamanoPanelinfo border border-dark'>

            <ol>

                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>
                <li className='h4'>PRODUCTO 1</li>


            </ol>

          </Col>

          <Col lg="6" className='segundoColor rounded-end'>
  
          <Grafica/>

          </Col>
      
    </Row>

    </Col>
  )
}
