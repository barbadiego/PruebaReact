//@ts-check
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function TestPromesas() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [producto, setProducto] = useState({})
  let pago;

    useEffect(() => {
      
        pago = new Promise((res, rej) => {
          setTimeout(() => {
            if (Math.random() < 0.5){
              res( { id: 1, name: "Camiseta", price: 100} )
            } else {
              rej("Sin producto.")
            }
          }, 1000)
        })

        pago
          .then((resultado) => {
            setProducto(resultado)
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
      {loading && "Aguarde"} {error && "Error de página"} {producto && <div>{JSON.stringify(producto)}</div>}
    </div>
  )
}
