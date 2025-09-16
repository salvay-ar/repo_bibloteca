import { useOutletContext } from "react-router-dom"

function LibrosFiccion () {
  const librosIniciales = useOutletContext();
  const librosFiccion = librosIniciales.filter(libro => libro.categoria == "Ficción" );

return (
    <>
     {librosFiccion.map((libro) => (
        <div className="info" key= {libro.id}>
        <span>{libro.titulo}</span>
      </div>
        ))}
    </>
)
}
export default LibrosFiccion