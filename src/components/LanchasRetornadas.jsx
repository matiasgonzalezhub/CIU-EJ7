import React, { Fragment } from "react";
import Embarcacion from "./Embarcacion";

const LanchasRetornadas = ({ lanchasRetornadas }) => {
  return (
    <Fragment>
      <div className="lanchasRetornadas">
        <h3> Lanchas retornadas </h3>
        {lanchasRetornadas.map((embarcacion) => (
          <Embarcacion key={embarcacion.id} embarcacion={embarcacion} />
        ))}
      </div>
    </Fragment>
  );
};

export default LanchasRetornadas;
