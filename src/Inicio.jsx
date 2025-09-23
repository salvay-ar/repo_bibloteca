import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Inicio() {

  const librosIniciales = [
    { id: 1, titulo: "1984", categoria: "ficcion" },
    { id: 2, titulo: "Sapiens", categoria: "no-ficcion" },
    { id: 3, titulo: "Un mundo feliz", categoria: "ficcion" },
    { id: 4, titulo: "Una breve historia del tiempo", categoria: "no-ficcion" }
  ];

  return (
    <>
      <nav>
        <h1>Bibloteca "Encontrá tu libro"</h1>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/libros/ficcion">Libros de ficción</Link>
          </li>
          <li>
            <Link to="/libros/no-ficcion">Libros de no ficción</Link>
          </li>
        </ul>
      </nav>

      <Outlet context = {librosIniciales}/>
    </>
  )
}
