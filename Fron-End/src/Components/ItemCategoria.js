//IMPORTACIONES
import { Button } from 'react-bootstrap';
import React from 'react';
import '../App.css';


export default function ItemCategoria({title,nameCategoria,cantidadProducto}) {
  
  return (
   <Button  variant="outline-primary" title={title} className=' m-2 rounded-pill position-relative botontamano'>
     <span className='textoBotn'>{nameCategoria}</span>
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantidadProducto}</span>
   </Button>
  )
}
