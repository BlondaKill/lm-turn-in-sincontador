import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CartContext);

  return (
    <div>
        <h4> {item.nombre} </h4>
        <p className="end"> Cantidad: {cantidad} </p>
        <p className="end"> Precio: ${item.precio} </p>
        <button className= "del" onClick={() => eliminarProducto(item.id)}> Delete </button>
        <hr />
    </div>
  )
}

export default CartItem