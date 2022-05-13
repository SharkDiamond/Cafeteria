import {React,createContext,useState} from 'react';

//CREANDO EL CONTEXTO
export const productListContext=createContext('');

export function UpdateListProducts({children}) {
  
    const [updateProductList,setUpdateProductList]  = useState(false);

    const contextValue={
        updateProductList,
        setUpdateProductList
    };

    return (
    <productListContext.Provider value={contextValue}>
       {children}
    </productListContext.Provider >
  )
}
