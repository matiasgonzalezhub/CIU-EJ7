import React, { Fragment } from "react";

const Embarcacion = ({
  embarcacion,
  embarcaciones,
  lanchasRetornadas,
  registraRetorno,
  deshaceRetorno,
}) => {
  const { id, nombre, matricula } = embarcacion;

  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }

    return false;
  }

  const registrarRetornoEmbarcacion = (id) => {
    const embarcacion = embarcaciones.filter(
      (embarcacion) => embarcacion.id === id
    )[0];

    if (!containsObject(embarcacion, lanchasRetornadas)) {
      registraRetorno([...lanchasRetornadas, embarcacion]);
    }
  };

  const deshacerRetornoEmbarcacion = (id) => {
    console.log("Entro ");
    const embarcacion = lanchasRetornadas.filter(
      (embarcacion) => embarcacion.id === id
    )[0];

    if (containsObject(embarcacion, lanchasRetornadas)) {
      registraRetorno([...lanchasRetornadas, embarcacion]);
    }
    console.log("se deshace retorno de lancha" + embarcaciones);
  };

  return (
    <Fragment>
      <div>
        <h3>
          {" "}
          ID : {id} Nombre : {nombre} Matricula: {matricula}{" "}
        </h3>
        {embarcaciones ? (
          <button type="button" onClick={() => registrarRetornoEmbarcacion(id)}>
            Registrar retorno
          </button>
        ) : (
          <button type="button" onClick={() => deshacerRetornoEmbarcacion(id)}>
            Deshacer retorno
          </button>
        )}
      </div>
    </Fragment>
  );
};
export default Embarcacion;
