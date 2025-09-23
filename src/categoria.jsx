import { useOutletContext } from "react-router-dom"
import { useParams } from "react-router-dom";
function Categoria () {

  const { categoria } = useParams();
  const librosIniciales = useOutletContext();
  const librosCategoria = librosIniciales.filter(libro => libro.categoria === categoria );
  console.log(categoria)
   console.log("Param:", categoria);
  console.log("Filtrados:", librosCategoria);

return (
    <>
    <h2>Libros de {categoria}</h2>
     {librosCategoria.map((libro) => (
        <div className="info" key= {libro.id}>
        <span>{libro.titulo}</span>
      </div>
        ))}
    </>
)
}
export default Categoria