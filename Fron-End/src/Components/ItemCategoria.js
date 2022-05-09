//IMPORTACIONES
import { CSSTransition } from 'react-transition-group';
import { Button } from 'react-bootstrap';
import {React} from 'react';
import '../App.css';


export default function ItemCategoria({title,nameCategoria,cantidadProducto}) {
 

  return (
   
  <CSSTransition timeout={2000} key={nameCategoria} className="animacionItemCategoria m-2 rounded-pill position-relative botontamano ">

    <Button  variant="outline-primary" title={title} disabled={cantidadProducto>0 ? false : true}>
      <span className='textoBotn'>{nameCategoria}</span>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantidadProducto}</span>
    </Button>

  </CSSTransition>

  )
}
