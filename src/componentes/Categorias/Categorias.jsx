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
        <button onClick ={() => handleClick("Home")}>Home</button>
        <button onClick ={() => handleClick("Blondes")}>Blondes</button>
        <button onClick ={() => handleClick("Brown")}>Brown</button>
        <button onClick ={() => handleClick("Darks")}>Darks</button>
    </div>
    ) 
}

export default Categorias