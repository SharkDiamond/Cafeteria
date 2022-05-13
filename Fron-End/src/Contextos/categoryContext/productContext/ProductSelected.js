import {React,createContext, useState} from 'react';

export const producto=createContext("");

export function ProductSelected({children}) {
                        //NOTA: CAMBIAR NOMBRE DEL METODO SET
   const [productoSeleccionado,setProducto] =useState({});
  
   const constextValue={

    productoSeleccionado,
    setProducto

  };
  
    return (
    <producto.Provider value={constextValue}>

        {children}

    </producto.Provider>
  )
}
