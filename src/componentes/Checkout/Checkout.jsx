import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";



const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);



    const manejadorFormulario = (event) => {
        event.preventDefault();


        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completa todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };


        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })

            })
        )

            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                        setNombre("");
                        setApellido("");
                        setTelefono("");
                        setEmail("");
                        setEmailConfirmacion("");
                        setError("");
                    })
                    .catch((error) => {
                        console.log("Fail to create order", error);
                        setError("Fail to create order, try later.");
                    });
            })
            .catch((error) => {
                console.log("Can't update stock", error);
                setError("Can't update stock, try later");
            })
    }

    return (
        <div>
            
            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} unidades. </p>
                            <hr />
                            <p> Precio Unitario: ${producto.item.precio} </p>
                            <hr />

                        </div>
                    ))
                }
                <p> Items: {cantidadTotal}</p>
                <hr />

                <p> Total Compra: ${total}</p>

                <div className="form-group">
                    <label className="form" style={{ color: "white" }} htmlFor=""> First Name  </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group" >
                    <label className="form" style={{ color: "white" }} htmlFor=""> Last Name  </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="form" style={{ color: "white" }} htmlFor=""> Phone </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="form" style={{ color: "white" }} htmlFor=""> Email  </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="form" style={{ color: "white" }} htmlFor=""> Confirm Email  </label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className="buttonform" style={{ color: "white" }} type="submit"> Submit </button>

            </form>

            {
                ordenId && (
                    <strong> Thanks! Number order {ordenId}</strong>
                )
            }
        </div>
    )
}

export default Checkout