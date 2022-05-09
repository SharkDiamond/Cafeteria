//IMPORTACIONES
import { Button, Col } from 'react-bootstrap';
import {React,useState,useEffect} from 'react';
import ItemCategoria from './ItemCategoria';
import '../App.css';
import { useCategorias } from '../Hooks/useCategorias';

export default function BarraCategorias() {

  const dataItems = useCategorias();
  
  return(
 
    <Col md lg="7" className='tamanoPanelData nav center-items-nav justify-content-center pt-2 pb-2 rounded segundoColor me-5 mb-5'>
    
        {dataItems.length==0  ?  "" : <Button  className=' rounded-pill '>Back</Button>}

        {dataItems.length==0 ? <h3>No hay Categorias</h3>  :  dataItems.map(({title,nameCategoria,cantidadProducto})=> <ItemCategoria  title='test' nameCategoria={nameCategoria} cantidadProducto={cantidadProducto}/>) }
      
        {dataItems.length==0  ?  "" : <Button className='rounded-pill'>Next</Button>}
      
    </Col>

  )
  
}
