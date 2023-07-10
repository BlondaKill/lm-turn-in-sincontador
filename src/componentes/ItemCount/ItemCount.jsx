import { useState } from "react";

const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial);

    

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
           <div>
            <button className="dec" onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button className="inc" onClick={incrementar}> + </button>
            </div>
            <button className="add" onClick={() => funcionAgregar(contador)}> Add to Cart </button>
        </>
    )
    }

export default ItemCount;
