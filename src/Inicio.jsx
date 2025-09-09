import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Inicio() {

  const librosIniciales = [
    { id: 1, titulo: "1984", categoria: "Ficción" },
    { id: 2, titulo: "Sapiens", categoria: "No ficción" },
    { id: 3, titulo: "Un mundo feliz", categoria: "Ficción" },
    { id: 4, titulo: "Una breve historia del tiempo", categoria: "No ficción" }
  ];

  return (
    <>
      <nav>
        <h1>Bibloteca "Encontrá tu libro"</h1>
        <Link to="/">Bibloteca</Link>
        <Link to="/ficcion">Libros ficción</Link>
        <Link to="/no-ficcion">Libros no ficción</Link>
        <Link to="/agregar">Agregar libro</Link>
      </nav>

      <Outlet />
    </>
  )
}
