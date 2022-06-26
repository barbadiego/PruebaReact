//@ts-check
import React, { useEffect } from 'react'
import { useState } from 'react';
import TestPromesasArrayLayout from './TestPromesasArrayLayout';

export default function TestPromesasArray() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [productos, setProductos] = useState([])
  let pago;

    useEffect(() => {
      
        pago = new Promise((res, rej) => {
          setTimeout(() => {
            if (Math.random() < 0.5){
              res( [{ id: 1, name: "Camiseta", price: 100},
              { id: 2, name: "Campera", price: 300},
              { id: 3, name: "Botines", price: 150},
              ] )
            } else {
              rej("Sin producto.")
            }
          }, 1000)
        })

        pago
          .then((resultado) => {
            setProductos(resultado)
          })
          .catch((err) => {
            setError(true)
          })
          .finally(() => {
            setLoading(false)
          })

    }, [])
    
  return (
    <div onClick={() =>{console.log(pago)}}>
      {loading && "Aguarde"} {error && "Error de página"} {productos && <TestPromesasArrayLayout productos={productos}/>}
    </div>
  )
}
