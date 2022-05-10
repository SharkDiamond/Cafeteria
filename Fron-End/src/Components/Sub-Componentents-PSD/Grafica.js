import { producto } from '../../Contextos/categoryContext/productContext/ProductSelected';
import GraficaProducto from './SubComponents-Grafica/GraficaProducto';
import UpdateProduct from './SubComponents-Grafica/UpdateProduct';
import React, { useContext,useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';


export default function Grafica({productoSeleccionado}) {
  
  const [showComponent,setshowComponent]=useState('GraficaProducto');

  //CICLO DE VIDA DE ACTUALIZACION DEL ESTADO GLOBAL productoSeleccionado
  useEffect(() => setshowComponent('GraficaProducto'), [productoSeleccionado]);
  
  return (
    <div className='p-2'>

      <h1 className='text-center bg-primary  rounded'>{productoSeleccionado.nombre}</h1>
      
      <nav className='text-center mb-2'>
    
        <Button className='me-3' variant='warning' onClick={e=>{setshowComponent('UpdateProduct')}}>Update</Button>
        <Button className='me-3' variant='primary' onClick={e=>setshowComponent('GraficaProducto')}>Grafica</Button>
        <Button className='me-3' variant='danger'>Delete</Button>

      </nav>
    
      {showComponent===`UpdateProduct` && <UpdateProduct producto={productoSeleccionado}/> }

      {showComponent===`GraficaProducto` && <GraficaProducto/> }

    </div>
  )
}
