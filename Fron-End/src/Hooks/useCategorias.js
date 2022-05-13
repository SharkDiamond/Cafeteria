import { useEffect, useState,useContext,useRef } from 'react';
import { category } from '../Contextos/categoryContext/CategorySelected';

export const useCategorias=()=>{

   const [dataItems, setdataItems] = useState([]);

   const [loteCategorias, setLoteCategorias] = useState([]);

   const [idPagina, setIdpagina] = useState(1);

   const {categorias,setCategorias}=useContext(category);

    const updateCount= useRef(0);

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

   //CICLO DE VIDA DE MONTAJE
   useEffect(() => {
     
        fetch(`http://localhost:8080/api/categorias?desde=0&hasta=${Infinity}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWIzZTg4ZGU0NDdlOTRjMzYxNmU1NzkiLCJpYXQiOjE2NTI0MTE0MjcsImV4cCI6MTY1MjQyNTgyN30.WqHIAccyqdpwEAb5d3b17ViR55QQdlV_UGExgn2079c"
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
   useEffect(() =>{

     //SACANDO EL ARREGLO DESDE EL INDICE INDICADO AL INFINITO
     const data=dataItems.slice(5*idPagina-5,Infinity);
     
     setLoteCategorias(data.slice(0,5));

   } ,[dataItems]);


   //CICLO DE VIDA DE ACTUALIZACION CUANDO EL ESTADO GLOBAL CATEGORIA CAMBIE
   useEffect(()=>{
      //SUMANDOLE 1 AL CONTEO DE EJECUCION DE ESTE METODO
      updateCount.current+=1;

      if (updateCount.current>4) setdataItems(categorias);

   } ,[categorias]);


    return {total:dataItems.length,
            loteCategorias,
            totalPage:Math.ceil(dataItems.length/5),
            backPaginate,
            nextPaginate,
            idPagina};
}