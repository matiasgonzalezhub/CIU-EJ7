import React, { Fragment } from "react";

const Embarcacion = ({
  embarcacion,
  embarcaciones,
  embarcacionesRetornadas,
  registrarRetorno,
  deshacerRetorno
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
    
   const arrayActualizado = embarcaciones.filter(
     (embarcacion) => embarcacion.id !== id
   );

    if (!containsObject(embarcacion, embarcacionesRetornadas)) {
      registrarRetorno([...embarcacionesRetornadas, embarcacion]);
    }

      deshacerRetorno(arrayActualizado);
  };

  const deshacerRetornoEmbarcacion = (id) => {
  debugger;
  const embarcacionRetorno = embarcacionesRetornadas.filter(
    (embarcacion) => embarcacion.id === id
  )[0];

    const arrayRetornoActualizado = embarcacionesRetornadas.filter(
      (embarcacion) => embarcacion.id !== id
    );

    //  if (!containsObject(embarcacionRetorno, embarcaciones)) {
    //    deshacerRetorno([...embarcaciones, embarcacionRetorno]);
        registrarRetorno(arrayRetornoActualizado);
   //   }
   // registrarRetorno(arrayRetornoActualizado);
    console.log("se deshace retorno de lancha");
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
