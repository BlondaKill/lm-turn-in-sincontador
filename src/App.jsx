import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Categorias from "./componentes/Categorias/Categorias"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"




const App = () => {
  return (
    <>
      
      <TituloPrincipal/> 
      <NavBar/> 
      <ItemListContainer greeting = {"Beauty comes from the inside.Inside the hair salon. La Mala"}/>   
      <Categorias/>
      <ItemDetailContainer/>
    </>
  )
}

export default App