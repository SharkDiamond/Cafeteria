import { producto as productoGlobal } from '../../../Contextos/categoryContext/productContext/ProductSelected.js';
import { productListContext } from '../../../Contextos/categoryContext/productContext/ListProductsUpdate';
import { category } from '../../../Contextos/categoryContext/CategorySelected';
import React, {useContext, useState} from 'react';
import '../../../App.css';

export default function UpdateProduct({producto}) {
  

  //MANDAR TODA LA LOGICA A UN HOOK
  const {categorias,getCategorias,updateCategory}=useContext(category);
  //ESTADO PARA EL FORMULARIO
  const [dataForms,setDataForms]=useState({});
 
  const {setProducto}=useContext(productoGlobal);

  const {setUpdateProductList}=useContext(productListContext);

  const update=(e) => {

    e.preventDefault();
    
    fetch(`http://localhost:8080/api/productos/actualizar/${producto._id}`,{

    method:"PUT",
    headers: {
      'Content-Type': 'application/json',
      'x-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWIzZTg4ZGU0NDdlOTRjMzYxNmU1NzkiLCJpYXQiOjE2NTI0MDY5MTMsImV4cCI6MTY1MjQyMTMxM30.vewazd7C36OqSft-Dns6J5BTkeCB5ggoUOOviiXF9IA"
    },
    body: JSON.stringify(dataForms) 

    }).then((data) => data.json()).then((data)=>{

        data.categoria={_id:data.categoria};
        //ACTUALIZANDO EL PRODUCTO CON LOS DATOS NUEVOS
        setProducto(data);
        //ACTUALIZAR SOLO SI SE CAMBIE LA CATEGORIA
        if (data.categoria._id!=producto.categoria._id){
        //OBTENIENDO LAS CATEGORIAS NUEVAMENTE
        getCategorias();
        //MOSTRANDO LA LISTA DE PRODUCTOS A LA QUE SE CAMBIO
        updateCategory(data.categoria._id);
        }
        //EN DADO CASO SE CAMBIE EL NOMBRE
        if(data.nombre!=producto.nombre) setUpdateProductList(oldUpdateList=>!oldUpdateList);
       
    })
    .catch(error=>console.log(error.message));

  }

  const handleChange=(e) => {

      setDataForms({

        ...dataForms,
        [e.target.name]:e.target.value

      });

  }
 
  return (
    <form className='animacionFormularios ms-4' onSubmit={e=>update(e)}>
        
        <label>Nombre Producto</label>
        <input className='mb-2 form' type='text' name="nombre" defaultValue={producto.nombre} onChange={e=>handleChange(e)}/>
        <br/>
        <label>Precio</label>
        <br/>
        
        <input className='mb-3' type='number' name='precio' defaultValue={producto.precio} onChange={e=>handleChange(e)}/>
        
        <select className='mb-1' name="categoria" defaultValue={producto.categoria._id} onChange={e=>handleChange(e)}>
           {categorias.map(element=><option value={element._id}>{element.nombre}</option>)}
        </select>
        <br/>
        
        <label>Descripcion</label>
        <br/>
        <input className='mb-2' name="descripcion" type='textarea' defaultValue={producto.descripcion} onChange={e=>handleChange(e)}/>
       
        
        <label className='me-2 mb-2'>Disponible</label>
        <label>Yes</label>
        <input className='mb-2 me-2' type='radio' name='disponible' value={true}  onChange={e=>handleChange(e)}/>
        <label>No</label>
        <input className='me-2' type='radio' name='disponible' value={false}  onChange={e=>handleChange(e)}  />
        <br/>
        
        <input type='submit' className='btn btn-success'/>

    </form>
  )

}