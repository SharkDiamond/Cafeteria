//IMPORTACIONES
import { Button, Col } from 'react-bootstrap';
import {React,useContext} from 'react';
import ItemCategoria from './ItemCategoria';
import '../App.css';
import { useCategorias } from '../Hooks/useCategorias.js';
import { category } from '../Contextos/categoryContext/CategorySelected';



export default function BarraCategorias() {

 const {total : totalCategorias,
        loteCategorias,
        totalPage,
        backPaginate,
        nextPaginate,
        idPagina}= useCategorias();

  return(
 
    <Col md lg="7" className=' tamanoPanelData  nav center-items-nav justify-content-center pt-2 pb-2 rounded segundoColor me-5 mb-5'>
        
        {
        //BOTON BACK
        totalCategorias==0 || idPagina==1 
        ?  "" 
        : <Button onClick={()=>backPaginate()} className='rounded-pill'>Back</Button>
        }

        {totalCategorias==0 || totalCategorias==undefined  
        ? <h3>No hay Categorias</h3>  
        : loteCategorias.map(({nombre,cantidad,_id})=><ItemCategoria uuidCategoria={_id} key={nombre} title={nombre}  nameCategoria={nombre} cantidadProducto={cantidad}/>) }
        {
        //BOTON NEXT
        totalCategorias==0 || totalCategorias<5 || idPagina==totalPage  
        ?  "" 
        : <Button className='rounded-pill' onClick={()=>nextPaginate()}>Next</Button>
        }
       
    </Col>

  )
  
}
