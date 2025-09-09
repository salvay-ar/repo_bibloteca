import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Inicio';
import AgregarLibro from './AgregarLibro';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="ficcion" element={<h1>Libros de ficción</h1>} />
          <Route path="no-" element={<h1>Libros de no ficción</h1>} />

          <Route path="agregar" element={<AgregarLibro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
