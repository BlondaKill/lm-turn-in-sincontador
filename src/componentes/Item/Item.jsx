import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Item.css'



const Item = ({nombre, precio, img}) => {
  const {id} = useParams();
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio:{precio} </p>
        <p>ID: {id} </p>
        */<Link to={`/item/${id}`} className='btnProducto'> Ver Detalles </Link>*/
    </div>
  )
}

export default Item