import { useState, useEffect } from "react"

const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("black");

    useEffect( () => {
        document.title = `Contador: ${contador}`;

        if(contador > 5) {
            setColor("red");
        } else {
            setColor("white");
        }

    },[contador])

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        console.log('Added ${contador} to Cart');
    }



    return (
    
    <div>
    
    <button className = 'contButton'onClick = {disminuirContador}> - </button>
    <strong>{contador}</strong>
    <button className = 'contButton'onClick = {aumentarContador}> + </button> 


    <button className = 'addButton' onClick = {agregarAlCarrito} style={{color: color}}> Add to Cart </button>

    </div>
    )
}

export default Contador