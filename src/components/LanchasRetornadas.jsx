import React, { Fragment } from "react";
import Embarcacion from "./Embarcacion";

const LanchasRetornadas = ({ embarcacionesRetornadas }) => {
  return (
    <Fragment>
      <div className="lanchasRetornadas">
        <h3> Lanchas retornadas </h3>
        {embarcacionesRetornadas.map((embarcacion) => (
          <Embarcacion key={embarcacion.id} embarcacion={embarcacion} />
        ))}
      </div>
    </Fragment>
  );
};

export default LanchasRetornadas;
