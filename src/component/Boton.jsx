import React, { useState, useEffect } from "react";
export default function Boton() {
  const [stateCont, setCont] = useState(0); // muestra el estado en que esta el objeto

  useEffect(() => {/* aca se ejecuta la logica */}, [stateCont /* aca se coloca el arreglo que vamos a ejeutar */]);

  // actualiza las variables, en este sentido sera el encargado que el contador sume un numero mas cada vez que le demos click al boton
  // en los {} se pone lo que va a ejecutar
  // y en los [] el array

  const contador = () => setCont(stateCont + 1);
  const descontador = () => setCont(stateCont - 1);

  return (
    <div>
      <button type="button" class="btn btn-danger mt-4 m-4" onClick={contador}>
        <h4>Dale click para aumentar contador</h4>
      </button>
      <button type="button" class="btn btn-danger mt-4 m-4" onClick={descontador}>
        <h4>Dale click para descontar</h4>
      </button>
      <h4 className=" mt-5">cuantos clicks llevas : {stateCont}</h4>

    </div>
  );
}
