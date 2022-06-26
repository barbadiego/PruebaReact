//@ts-check
import React from "react";

export default function TestPromesasArrayLayout({ productos }) {
  console.log(productos)
  return (
    <>
        <div>
        {productos.map((producto) => (
            <div key={producto.id}>
            ID: {producto.id}, nombre {producto.name}, el precio es{" "}
            {producto.price}
            </div>
        ))}
        </div>
    </>
  );
}
