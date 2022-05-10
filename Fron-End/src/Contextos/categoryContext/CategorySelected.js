import {React,useState,useContext,createContext} from 'react';

export const category=createContext("");

export  function CategorySelected({children}) {
  
    const [categorySeleccionada, setCategorySeleccionada] = useState('');

    const [categorias, setCategorias] = useState([]);

    const updateCategory=(categoryNew) => setCategorySeleccionada(categoryNew);

    const contextValue={
      categorySeleccionada,
      updateCategory,
      categorias,
      setCategorias
    };

return (
    <category.Provider value={contextValue}>

        {children}

    </category.Provider>
  )
}
