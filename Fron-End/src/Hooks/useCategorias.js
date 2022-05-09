import { useEffect, useState  } from 'react';

export const useCategorias=()=>{

    const [dataItems, setdataItems] = useState([]);

    useEffect(() => {
     
            fetch(`http://localhost:8080/api/categorias?desde=0&hasta=${Infinity}`,{
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'x-token':""
            }
            })

            .then(dataFect=>setdataItems(dataFect))
          
            .catch(error=>console.log(error.message));
          
    },[]);
    
    return dataItems;

}