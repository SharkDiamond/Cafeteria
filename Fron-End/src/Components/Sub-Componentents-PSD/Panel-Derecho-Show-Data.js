import { productListContext } from '../../Contextos/categoryContext/productContext/ListProductsUpdate';
import { category } from '../../Contextos/categoryContext/CategorySelected';
import GraficaProducto from './SubComponents-Panel-Derecho-Show-Data/GraficaProducto';
import React, { useContext,useState,useEffect, useRef } from 'react';
import UpdateProduct from './SubComponents-Panel-Derecho-Show-Data/UpdateProduct';
import { Button } from 'react-bootstrap';

export default function PanelDerechoShowData({productoSeleccionado}) {
  
  //MANDAR ESTA LOGICA A UN HOOK

  const [showComponent,setshowComponent]=useState('GraficaProducto');

  const {getCategorias}=useContext(category);

  const {setUpdateProductList}=useContext(productListContext);

  const cajaOpciones=useRef();

  const messageNada=useRef();

  const deleteProduct=()=>{

    fetch(`http://localhost:8080/api/productos/delete/${productoSeleccionado._id}`,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'x-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWIzZTg4ZGU0NDdlOTRjMzYxNmU1NzkiLCJpYXQiOjE2NTIzODA5NzMsImV4cCI6MTY1MjM5NTM3M30.-EBsW7trt4Rg5rNN6wfl6JhtFZgiMMQ0-HSw9tUYO4k"
      }

    }).then(()=>{
      
      //ACTUALIZANDO LOS ITEMS DE LA BARRA
      getCategorias();
      //ACTUALIZANDO LA LISTA DE PRODUCTOS
      setUpdateProductList(oldState=>!oldState);
      //MOSTRANDO EL MENSAJE
      messageNada.current.className="animacionFormularios";
      //OCULTANDO LA CAJA DE OPCIONES
      cajaOpciones.current.className="d-none";

    }); 

  }

  useEffect(() => {

      messageNada.current.className="d-none";
   
      cajaOpciones.current.className="";

   },[productoSeleccionado]);

  //CICLO DE VIDA DE ACTUALIZACION DEL ESTADO GLOBAL productoSeleccionado
  useEffect(() => setshowComponent('GraficaProducto'), [productoSeleccionado]);
  
  return (
    <div className='p-2'>

      <h1  className="d-none" ref={messageNada}>No se ha seleccionado ningun producto</h1>


      <div ref={cajaOpciones} className="animacionFormularios">

      <h1 className='text-center bg-primary  rounded'>{productoSeleccionado.nombre}</h1>
      
      <nav className='text-center mb-2'>
    
        <Button className='me-3'  variant='warning' onClick={e=>{setshowComponent('UpdateProduct')}}>Update</Button>
        <Button className='me-3' variant='primary' onClick={e=>setshowComponent('GraficaProducto')}>Grafica</Button>
        <Button className='me-3' variant='danger' onClick={e=>{deleteProduct()}}>Delete</Button>

      </nav>
    
      {showComponent===`UpdateProduct` && <UpdateProduct producto={productoSeleccionado}/> }

      {showComponent===`GraficaProducto` && <GraficaProducto/>}
      
      </div>
    </div>
  )
}