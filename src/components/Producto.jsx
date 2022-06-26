//@ts-check
import React, { useState, useEffect } from "react";

export default function Producto({ miProd, maxStock }) {
  console.log("render");

  // let auxStock = maxStock;

  // ESTADO
  const [auxStock, setAuxStock] = useState(maxStock);


  // MONTAJE
  useEffect(() => {
    let arg = true;
    if (arg) {
      setAuxStock(maxStock + 200);
    }

  }, [])

  // CAMBIOS LIMITADOS AL PARÁMETRO DEL ARRAY DE DEPENDENCIAS
  useEffect(() => {
    if (auxStock > 305){
      alert("Cambiando stock.")
    }
  }, [auxStock])

  // FIN
  useEffect(() => {
  
    return () => {
      alert("Desmontaje");
    }
  }, [])


  function sumatoria() {
    setAuxStock(auxStock + 1);
    // alert(auxStock);
  }
  return (
    <div>
      Producto: {JSON.stringify(miProd)}
      <p>Maximo stock: {auxStock}</p>
      <div
        onClick={() => sumatoria()}
        style={{ border: "1px solid red", width: "200px" }}
      >
        Sumar +1 a stock maximo
      </div>
    </div>
  );
}
