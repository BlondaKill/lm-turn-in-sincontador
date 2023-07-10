import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CarritoProvider } from './context/CartContext'
import Cart from "./componentes/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={
                  "Beauty Comes From The Inside. Inside The Hair Salon . La Mala"} />}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={
                  "Beauty Comes From The Inside. Inside The Hair Salon. La Mala"}/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<h2>Site Under Construction</h2>} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
