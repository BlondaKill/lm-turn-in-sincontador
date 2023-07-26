import React, { useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';



const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarProducto} = useContext(CartContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

  const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div>
      <h2 className="name"> {nombre} </h2>
      <h3 className="price"> ${precio} </h3>
      <h3 className="idd">ID: {id} </h3>

      <img src={img} alt={nombre} />
      {
         agregarCantidad > 0 ? ( <div><Link className={"fin"} to="/cart"> Finalizar Compra </Link> <Link className={"fin"} to="/">Seguir comprando</Link></div>)
         : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }     
      
    </div>
  )
}

export default ItemDetail;
