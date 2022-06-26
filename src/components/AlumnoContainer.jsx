import React from 'react'
import AlumnoPresentacion from './AlumnoPresentacion'

export default function AlumnoContainer() {
    let alumno = {nombre: "Diego", apellido: "Barba", edad: 30}
    return (    
    <AlumnoPresentacion item={alumno}/>
  )
}
