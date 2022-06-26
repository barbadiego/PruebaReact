//@ts-check
import React from "react";
import HijoDeTest from "./HijoDeTest";

export default function Test({ msg }) {
  return (
    <div style={{ backgroundColor: "white", marginBottom: "50px"}}>
      { msg }
      <HijoDeTest msgaa="Hola soy Pepe"/>
      <HijoDeTest msgaa="Hola soy Pepa"/>

    </div>
  );
}
