import { useState } from "react";

export default function AgregarLibro() {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: ""
  });
  
  const agregar = (libro) => {
    // Supondremos que esta función esta completamente
    // implementada y agrega de manera correcta un libro
    // al arreglo declarado en la componente Inicio
    return libro
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    agregar(formData);
    setFormData({ titulo: "", categoria: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
      />
      <input
        name="categoria"
        value={formData.categoria}
        onChange={handleChange}
        placeholder="Categoría"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
