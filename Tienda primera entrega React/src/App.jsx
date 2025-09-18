import "./App.css"; 
import { ItemListContainer } from "./componentes/ItemListContainer";
import { NavBar } from "./componentes/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a mi tienda online!" />
    </>
  )
}

export default App
