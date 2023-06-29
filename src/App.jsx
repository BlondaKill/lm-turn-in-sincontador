import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Categorias from "./componentes/Categorias/Categorias"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Contador from "./componentes/Contador/Contador"
import CartWidget from "./componentes/CartWidget/CartWidget"
import Home from "./componentes/Home/Home"
import Item from "./componentes/Item/Item"
import ItemDetail from "./componentes/ItemDetail/ItemDetail"
import ItemList from "./componentes/ItemList/ItemList"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "react-bootstrap"



const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path="/CartWidget" element={<CartWidget/>}/>
        <Route path="/Categorias/:idCategorias" element={<ItemListContainer/>}/>
        <Route path="/Contador" element={<Contador/>}/>
        <Route path="/Item" element={<Item/>}/>
        <Route path="/ItemDetail" element={<ItemDetail/>}/>
        <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
        <Route path="/ItemList" element={<ItemList/>}/>
        <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<h2>Site Under Construction</h2>}/>

      </Routes>    
      </BrowserRouter>

      
      
      <ItemListContainer greeting = {"Beauty Comes From The Inside.Inside The Hair Salon.  La Mala"}/>   
      <Contador stock={10} inicial={1}/>
      <Categorias/>
      <ItemDetailContainer/>
    </>
  )
}

export default App