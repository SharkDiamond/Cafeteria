import { category } from '../../../Contextos/categoryContext/CategorySelected';
import React, {useContext} from 'react';
import '../../../App.css';

export default function UpdateProduct({producto}) {
  
  const {categorias}=useContext(category);


  return (
    <form className='animacionFormularios ms-4'>
        
        <label>Nombre Producto</label>
        <input className='mb-2 form' type='text' name="nombreProducto" defaultValue={producto.nombre}/>
        <br/>
        <label>Precio</label>
        <br/>
        
        <input className='mb-3' type='number' defaultValue={producto.precio}/>
        
        <select className='mb-1' defaultValue={producto.categoria.nombre}>
           {categorias.map(element=><option value={element.nombre}>{element.nombre}</option>)}
        </select>
        <br/>
        
        <label>Descripcion</label>
        <br/>
        <input className='mb-2' type='textarea' defaultValue={producto.descripcion} />
       
        
        <label className='me-2 mb-2'>Disponible</label>
        <label>Yes</label>
        <input className='mb-2 me-2' type='radio' name='Disponible' defaultChecked={true}/>
        <label>No</label>
        <input className=' me-2 ' type='radio' name='Disponible'  />
        <br/>
        
        <input type='submit' className='btn btn-success'/>

    </form>
  )
}
