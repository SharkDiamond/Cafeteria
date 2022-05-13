import {React,useState,useContext,createContext} from 'react';

export const category=createContext("");

export function CategorySelected({children}) {
  
    const [categorySeleccionada, setCategorySeleccionada] = useState('');

    const [categorias, setCategorias] = useState([]);
    //ESTO HAY QUE QUITARLO PARA QUE ESTA EL setCategorySeleccionada
    const updateCategory=(categoryNew) => setCategorySeleccionada(categoryNew);


    const getCategorias=() => {

      fetch(`http://localhost:8080/api/categorias?desde=0&hasta=${Infinity}`,{
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'x-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWIzZTg4ZGU0NDdlOTRjMzYxNmU1NzkiLCJpYXQiOjE2NTI0MTE0MjcsImV4cCI6MTY1MjQyNTgyN30.WqHIAccyqdpwEAb5d3b17ViR55QQdlV_UGExgn2079c"
        }
        })

        .then(dataFect=>dataFect.json())

        .then(({categorias})=>setCategorias(categorias))
      
        .catch(error=>console.log(error));
      
    }

    const contextValue={
      categorySeleccionada,
      categorias,
      setCategorias,
      getCategorias,
      updateCategory
    };

return (
    <category.Provider value={contextValue}>
        {children}
    </category.Provider>
  )
}