import { useEffect, useState,useContext } from 'react';
import { category } from '../Contextos/categoryContext/CategorySelected';

export const useCategorias=()=>{

   const [dataItems, setdataItems] = useState([]);

   const [loteCategorias, setLoteCategorias] = useState([]);

   const [idPagina, setIdpagina] = useState(1);


   const {setCategorias}=useContext(category);

   //FUNCION PARA IR A LA PAGINA SIGUIENTE
   const nextPaginate=() => setIdpagina(element=>element+1);
   
   //FUNCION PARA VOLVER A LA PAGINA ANTERIOR
   const backPaginate=() => setIdpagina(element=>element-1);
  
   //FUNCION QUE ACTUALIZA EL LOTE DE LA CATEGORIA
   const nextCategorias=(idPaginate) => {
    
    //SACANDO EL ARREGLO DESDE EL INDICE INDICADO AL INFINITO
    const data=dataItems.slice(5*idPaginate-5,Infinity);
    //ACTUALIZANDO EL ESTADO DE LOTE CATEGORIA
    setLoteCategorias(data.slice(0,5));

}

   //CUANDO EL COMPONENTE SE MONTE
   useEffect(() => {
     
        fetch(`http://localhost:8080/api/categorias?desde=0&hasta=${Infinity}`,{
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'x-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWIzZTg4ZGU0NDdlOTRjMzYxNmU1NzkiLCJpYXQiOjE2NTIyMTUyMzcsImV4cCI6MTY1MjIyOTYzN30.bx5GjyWYDRamQDRFn4rENCs2eFBMisXW2PJIdVVBK04"
        }
        })

        .then(dataFect=>dataFect.json())

        .then(({categorias})=>{
          
          
          setdataItems(categorias);
        
          setCategorias(categorias);
        
        
        })
      
        .catch(error=>console.log(error));
      
    },[]);

   //CICLO DE VIDA DE ACTUALIZACION ESTADO idPagina
   useEffect(() => nextCategorias(idPagina), [idPagina])
   
   //CICLO DE VIDA DE ACTUALIZACION ESTADO dataItems
   useEffect(() => setLoteCategorias(dataItems.slice(0,5)),[dataItems]);

    return {total:dataItems.length,
            loteCategorias,
            totalPage:Math.ceil(dataItems.length/5),
            backPaginate,
            nextPaginate,
            idPagina};
}