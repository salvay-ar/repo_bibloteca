import { useOutletContext } from "react-router-dom"

function LibrosNoFiccion () {
  const librosIniciales = useOutletContext();
  const librosNoFiccion = librosIniciales.filter(libro => libro.categoria == "No ficción");

return (
    <>
     {librosNoFiccion.map((libro) => (
        <div className="info" key= {libro.id}>
        <span>{libro.titulo}</span>
      </div>
        ))}
    </>
)
}
export default LibrosNoFiccion