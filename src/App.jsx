import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={
                  "Beauty Comes From The Inside, Inside The Hair Salon. La Mala"
                }
              />
            }
          />
          <Route
            path="/categoria/:idCategoria"
            element={
              <ItemListContainer
                greeting={
                  "Beauty Comes From The Inside. Inside The Hair Salon. La Mala"
                }
              />
            }  
          />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Site Under Construction</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
