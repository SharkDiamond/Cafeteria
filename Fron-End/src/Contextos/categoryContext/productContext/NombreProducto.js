import {React,createContext,useState} from 'react';

//CREANDO EL CONTEXTO
export const productNameContext=createContext('');

export function NombreProducto({children}) {
  
    const [productName, setNameProduct] = useState('');
  
    const contextValue={

        productName,
        setNameProduct
    };

    return (
   <productNameContext.Provider value={contextValue}>
       {children}
    </productNameContext.Provider >
  )
}
