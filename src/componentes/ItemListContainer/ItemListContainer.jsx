import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';






const ItemListContainer = (props) => {
      const [productos, setProductos] = useState([]);
       
      const {idCategoria} = useParams();

      useEffect(() => {
        const funcion = idCategoria ? getProductosPorCategoria : getProductos;

        funcion(idCategoria)
            .then(res => setProductos(res))

      }, [idCategoria])



      
return (
    <> 
      <h2 className='text-center m-5 nombreDelTitulo'> {props.greeting} </h2>
      <ItemList productos = {productos}/>
    
      </>
  )}

export default ItemListContainer