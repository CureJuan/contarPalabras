import "./App.css";
import React, { useState } from "react";

const App = () => {

  const [mensaje, setMensaje] = useState("");
  const [cont, setCont] = useState(0);

  const contPalabras = () => {
    setCont(mensaje.split(" ").filter(
      function (n) { return n !== '' }).length);
  }

  const borrarPalabras = () => {
    setMensaje("");
    setCont(0)

  }

  return (
    <>
      <h1 className="titulo">Contador de Palabras</h1>
      <p>Escriba un parrafo y te devolvera el total de palabras</p>
      <p><b>Realizado por Juan Carlos Iasenza</b></p>
      <br />
      <div className="area">
        <textarea
          name="text"
          placeholder='Ingrese un parrafo'
          value={mensaje}
          type="text"
          rows={8}
          cols={50}
          onChange={e => setMensaje(e.target.value)} />
      </div>
      <div className="boton">
        <button onClick={contPalabras}>Contar</button>
        <button onClick={borrarPalabras}>Borrar</button>
      </div>
      <label className="resultado">Escribiste {cont} Palabras</label>

    </>
  );
};

export default App;
