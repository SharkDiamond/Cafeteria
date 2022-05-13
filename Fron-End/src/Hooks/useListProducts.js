import { category } from "../Contextos/categoryContext/CategorySelected";
import { useContext,useEffect,useState } from "react";
import { productListContext } from "../Contextos/categoryContext/productContext/ListProductsUpdate";

export  function useListProducts() {
 
    const [list, setList] = useState([]);
    
    const {categorySeleccionada} = useContext(category);

    const {updateProductList}=useContext(productListContext);
  
    useEffect(() => {

        const obtenerProductos = async() => {

            try {
              
              //HACIENDO LA PETICION
              const listProductos= await fetch(`http://localhost:8080/api/productos/obtenerVarios?desde=0&hasta=${Infinity}&categoria=${categorySeleccionada}`,{
              method: 'GET',
              headers: {
              'Content-Type': 'application/json',
              'x-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWIzZTg4ZGU0NDdlOTRjMzYxNmU1NzkiLCJpYXQiOjE2NTI0MDY5MTMsImV4cCI6MTY1MjQyMTMxM30.vewazd7C36OqSft-Dns6J5BTkeCB5ggoUOOviiXF9IA"
              }
              });
              //PARSEANDO EL RESULTADO A JSON
              const resultado=await listProductos.json();
              //ACTULIZANDO EL ESTADO DE list
              setList(resultado.productos);

            } catch (error) {
                
                //EN DADO CASO OCURRA UN PROBLEMA
                console.log("Ocurrio un problema");

            }

        }

         //LLAMANDO LA FUNCION obtenerProductos
         obtenerProductos();

    }, [categorySeleccionada,updateProductList]);
   
    return list;

}