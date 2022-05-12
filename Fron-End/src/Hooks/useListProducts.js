import { category } from "../Contextos/categoryContext/CategorySelected";
import { useContext,useEffect,useState } from "react";
import { productNameContext } from "../Contextos/categoryContext/productContext/NombreProducto";

export  function useListProducts() {
 
    const [list, setList] = useState([]);
    
    const {categorySeleccionada} = useContext(category);

    const {productName}=useContext(productNameContext);
  
    useEffect(() => {

     
        const obtenerProductos= async() => {

        const listProductos=  await fetch(`http://localhost:8080/api/productos/obtenerVarios?desde=0&hasta=${Infinity}&categoria=${categorySeleccionada}`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWIzZTg4ZGU0NDdlOTRjMzYxNmU1NzkiLCJpYXQiOjE2NTIzODA5NzMsImV4cCI6MTY1MjM5NTM3M30.-EBsW7trt4Rg5rNN6wfl6JhtFZgiMMQ0-HSw9tUYO4k"
            }
            });


          const resultado=await listProductos.json();

           setList(resultado.productos);

         
         }
         
         obtenerProductos();

         alert('update list');
    }, [categorySeleccionada,productName]);
    
    return list;

}