import React from 'react'

function Card({ estudiante, setShowCard, setEstudiante }) {
  return (
    <div className='card'> 
        <h3>En Hora Buena!</h3>
        <p>Hola <strong>{estudiante.nombre}  {estudiante.apellido}</strong>
          felicitaciones por registrarte a <strong> {estudiante.materia} </strong>
           tu asesor se comunicara contigo al correo registrado <strong> {estudiante.email} </strong></p>
          <div className='button_back'>
            <button onClick={() => {setShowCard(false), setEstudiante({nombre: "", email: "", apellido: "", materia: ""})}}>Volver a Registrar</button>
          </div>          
    </div>
    
  )
}

export default Card