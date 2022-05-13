import { producto } from '../Contextos/categoryContext/productContext/ProductSelected.js';
import PanelDerechoShowData from './Sub-Componentents-PSD/Panel-Derecho-Show-Data.js';
import ListProducts from './Sub-Componentents-PSD/ListProducts.js';
import { Col,Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import '../App.css';

export default function PanelShowData() {
  

  const {productoSeleccionado}= useContext(producto);
  
  return (
    <Col lg="7" className='tamanoPanelData me-5'>
        
        <Row>

          <Col lg="6" className='segundoColor rounded-start pt-4 pb-4 tamanoPanelinfo border border-end border-dark'>
         
            <ListProducts/>
          
          </Col>

          <Col lg="6" className='segundoColor rounded-end border border-start border-dark p-3'>
  
            {productoSeleccionado.length!=0 
             ? <PanelDerechoShowData productoSeleccionado={productoSeleccionado}/> 
             : <h2>No se ha seleccionado ningun producto</h2>}

          </Col>
      
        </Row>

    </Col>
  )
}
