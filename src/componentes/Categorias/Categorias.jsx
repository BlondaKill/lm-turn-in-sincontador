import { useState, useEffect } from "react"


const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect( () => {
        document.title = `Categoria: ${categoria}`;

    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria);

    }

    return (
    <div>
        <button onClick ={() => handleClick("Home")}> Home </button>
        <button onClick ={() => handleClick("Servicios")}> Servicios </button>
        <button onClick ={() => handleClick("Precios")}> Precios </button>
        <button onClick ={() => handleClick("Tienda")}> Tienda </button>
    </div>
    ) 
}

export default Categorias