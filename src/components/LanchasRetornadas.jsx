import React, { Fragment } from "react";
import Embarcacion from "./Embarcacion";

const LanchasRetornadas = ({
//  embarcaciones,
  embarcacionesRetornadas,
  registrarRetorno,
  deshacerRetorno,
}) => {
  return (
    <Fragment>
      <div className="lanchasRetornadas">
        <h3> Lanchas retornadas </h3>

        {embarcacionesRetornadas.length === 0 ? (
          null
        ) : (
          embarcacionesRetornadas.map((embarcacion) => (
            <Embarcacion
              key={embarcacion.id}
           //   embarcaciones={embarcaciones}
              embarcacion={embarcacion}
              embarcacionesRetornadas={embarcacionesRetornadas}
              registrarRetorno={registrarRetorno}
              deshacerRetorno={deshacerRetorno}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default LanchasRetornadas;
