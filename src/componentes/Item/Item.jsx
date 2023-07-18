import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardProducto">
      <img className="imgProducto" src={img} alt={nombre} />
      <h3 className="front"> {nombre} </h3>
      <p className="front1"> ${precio} </p>
      <p className="front1">Stock: {stock} </p>
      <p className="front2">ID: {id} </p>
      <Link to={`/item/${id}`} className="btnProducto">{" "}Detail{" "}</Link>
    </div>
  )
}

export default Item;
