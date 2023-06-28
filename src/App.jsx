import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Categorias from "./componentes/Categorias/Categorias"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Contador from "./componentes/Contador/Contador"
import CartWidget from "./componentes/CartWidget/CartWidget"
import Item from "./componentes/Item/Item"
import ItemDetail from "./componentes/ItemDetail/ItemDetail"
import ItemList from "./componentes/ItemList/ItemList"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "react-bootstrap"



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/CartWidget" element={<CartWidget/>}/>
        <Route path="/Categorias" element={<Categorias/>}/>
        <Route path="/Contador" element={<Contador/>}/>
        <Route path="/Item" element={<Item/>}/>
        <Route path="/ItemDetail" element={<ItemDetail/>}/>
        <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
        <Route path="/ItemList" element={<ItemList/>}/>
        <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/TituloPrincipal" element={<TituloPrincipal/>}/>
      </Routes>    
      </BrowserRouter>



      <TituloPrincipal/> 
      <NavBar/> 
      <ItemListContainer greeting = {"Beauty Comes From The Inside.Inside The Hair Salon.  La Mala"}/>   
      <Contador stock={10} inicial={1}/>
      <Categorias/>
      <ItemDetailContainer/>
    </>
  )
}

export default App