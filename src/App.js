import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment, useState } from "react";
import Embarcacion from "./components/Embarcacion";
import LanchasRetornadas from "./components/LanchasRetornadas";

function App() {
  const fecha = new Date().getFullYear();
  const [embarcaciones, deshacerRetorno] = useState([
    { id: 1, nombre: "Anadri", matricula: "aaa111" },
    { id: 2, nombre: "Chola", matricula: "als234" },
    { id: 3, nombre: "LaDelRio", matricula: "123fff" },
    { id: 4, nombre: "Tigre", matricula: "ass345" },
  ]);

  const [lanchasRetornadas, registraRetorno] = useState([]);

  return (
    <div className="App">
      <Fragment>
        <Header />
        <h1>Embarcaciones en transito</h1>
        {embarcaciones.map((embarcacion) => (
          <Embarcacion
            key={embarcacion.id}
            embarcacion={embarcacion}
            embarcaciones={embarcaciones}
            lanchasRetornadas={lanchasRetornadas}
            registraRetorno={registraRetorno}
            deshaceRetorno={deshacerRetorno}
          />
        ))}

        <LanchasRetornadas lanchasRetornadas={lanchasRetornadas} />

        <Footer fecha={fecha} />
      </Fragment>
    </div>
  );
}

export default App;
