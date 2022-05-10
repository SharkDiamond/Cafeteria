import { category } from "../Contextos/categoryContext/CategorySelected";
import { useContext,useEffect,useState } from "react";

export  function useListProducts() {
 
    const [list, setList] = useState([]);
    
    const {categorySeleccionada} = useContext(category);

    useEffect(() => {

        const obtenerProductos= async() => {

        const listProductos=  await fetch(`http://localhost:8080/api/productos/obtenerVarios?desde=0&hasta=${Infinity}&categoria=${categorySeleccionada}`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWIzZTg4ZGU0NDdlOTRjMzYxNmU1NzkiLCJpYXQiOjE2NTIyMTUyMzcsImV4cCI6MTY1MjIyOTYzN30.bx5GjyWYDRamQDRFn4rENCs2eFBMisXW2PJIdVVBK04"
            }
            });


          const resultado=await listProductos.json();

           setList(resultado.productos);

         
         }
         
         obtenerProductos();

    
    }, [categorySeleccionada]);
    
    return list;

}