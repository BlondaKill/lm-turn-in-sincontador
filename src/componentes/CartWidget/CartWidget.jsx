import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import "./CartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <img className='imgCarrito' style={{ width: "3rem" }} src="../img/b.png" alt="carrito de compras" />
        {
          cantidadTotal > 0 && <strong className="number" style={{ color: "white" }}> {cantidadTotal} </strong>
        }

      </Link>
    </div>
  )
}



export default CartWidget