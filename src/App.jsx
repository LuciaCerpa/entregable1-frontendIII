import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [estudiante, setEstudiante] = useState({
      nombre: "",
      email: "",
      apellido: "",
      materia: ""
  });
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setEstudiante((prevEstudiante) => ({
          ...prevEstudiante,
          [name]: value,
      }));
  };

  const validarYEnviar = (e) => {
      e.preventDefault();

      // Validaciones
      const nombreValido = estudiante.nombre.trim().length >= 3 && !/^\s/.test(estudiante.nombre);
      const materiaValida = estudiante.materia.trim().length >= 6;
      const apellidoValido = estudiante.apellido.trim().length >= 3;
      const emailValido = estudiante.email.includes('@');
      
      if (!nombreValido || !emailValido || !apellidoValido || !materiaValida) {
          setError(true);
          setShowCard(false);
          setTimeout(() => {
            setError(false);
          }, 2500);
          return;
      }

      // Si las validaciones son correctas, mostrar la Card
      setError(false);
      setShowCard(true);
  };

  return (
      <div className="app">
          {showCard ? <Card estudiante={estudiante} setShowCard={setShowCard} setEstudiante={setEstudiante}/> : 
          <>
            <h2>Formulario de Estudiante</h2>
            <form onSubmit={validarYEnviar}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={estudiante.nombre}
                    onChange={handleChange}
                /><br/><br/>

                <label htmlFor="apellido">Apellido:</label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={estudiante.apellido}
                    onChange={handleChange}
                /><br/><br/>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={estudiante.email}
                    onChange={handleChange}
                /><br/><br/>

                <label htmlFor="materia">Materia:</label>
                <input
                    type="text"
                    id="materia"
                    name="materia"
                    value={estudiante.materia}
                    onChange={handleChange}
                /><br/><br/>

                <button type="submit">Enviar</button>

                {error && (
                    <p className="error">Por favor chequea que la información sea correcta</p>
                )}
            </form>
          </>
        }
    </div>   
  )
}

export default App
