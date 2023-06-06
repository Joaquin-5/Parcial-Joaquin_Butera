import React from "react";
import { useState } from "react";
import Card from "./Card";

export const Formulario = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [sendSuccessfully, setSendSuccessfully] = useState(false);
  const [data, setData] = useState({});

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeLastName(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim().length < 3 || name.trim() === "") {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (lastName.trim().length < 6 || lastName.trim() === "") {
      setError("Por favor chequea que la información sea correcta");
      return;
    } else {
      let object = {
        name: name,
        lastName: lastName,
      };
      setData(object);
      setSendSuccessfully(true);
      setError("");
    }
  }

  return (
    <>
      <h1>Datos Personales</h1>
      <form onSubmit={handleSubmit}>
        <div className="label-input">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className="label-input">
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={onChangeLastName}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {sendSuccessfully && !error ? (
        <Card data={data} />
      ) : (
        <p className="error">{error}</p>
      )}
    </>
  );
};
