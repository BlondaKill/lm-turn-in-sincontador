import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> Empty Cart </h2>
                <Link className={"checko"} to="/"> Return </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id}  {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button className="del" onClick={() => vaciarCarrito()}> Clear Cart </button>
            <Link className={"cheko"} to="/checkout"> Checkout </Link>
        </div>
    )
}

export default Cart