import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CartContext";
import Cart from "./componentes/Cart/Cart";
//import Checkout from "./componentes/Checkout/Checkout"


import "./App.css";
import Checkout from "./componentes/Checkout/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={
                  "BEAUTY COMES FROM THE INSIDE. INSIDE THE HAIR SALON . LA MALA"} />}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={
                  "BEAUTY COMES FROM THE INSIDE. INSIDE THE HAIR SALON . LA MALA"}/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          
          <Route path="*" element={<h2>Site Under Construction</h2>} />
        </Routes>
        </CarritoProvider>     
      </BrowserRouter>
    </>
  )
}

export default App;
