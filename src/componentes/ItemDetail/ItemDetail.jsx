import React from "react";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <h2 className="name"> {nombre} </h2>
      <h3 className="price"> ${precio} </h3>
      <h3 className="idd">ID: {id} </h3>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
