import {useListProducts} from '../../Hooks/useListProducts';
import { CSSTransition } from 'react-transition-group';
import {React,useEffect,useContext} from 'react';
import  '../../App.css';
import { Button } from 'react-bootstrap';
import { producto } from '../../Contextos/categoryContext/productContext/ProductSelected';

export default function ListProducts() {

  let Productos= useListProducts();

  const {setProducto}= useContext(producto);


  return (
   
    <ol>
      
      {Productos ? 
      Productos.map(element=>
      <li  key={element.nombre} className='fw-bold animacionListaProductos mb-3'>
        <Button className='rounded-pill' name={element.nombre} onClick={(e)=>setProducto(element)} variant='primary'>{element.nombre}</Button>
      </li>
      ) 
      :
      <h2>No se ha seleccionado una categoria</h2>}
      
    </ol>
   
   )
}
