import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Categorias from "./componentes/Categorias/Categorias"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Contador from "./componentes/Contador/Contador"
import { BrowserRouter, Route, Routes } from "react-router-dom"



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route/>
        <Route/>
        <Route/>

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