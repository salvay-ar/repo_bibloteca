import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="libros/ficcion" element={<h1>Libros de ficción</h1>} />
          <Route path="libros/no-ficcion" element={<h1>Libros de no ficción</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
