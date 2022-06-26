import React from 'react'

export default function AlumnoPresentacion({item}) {
  return (
    <div>Te muestro un alumno: {item.nombre} {item.apellido} {item.edad}</div>
  )
}
