import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Embarcacion from "./components/Embarcacion";

function App() {
  const fecha = new Date().getFullYear();
  const [embarcaciones, guardarEmbarcacion] = useState([
    { id: 1, nombre: "Anadri", matricula: "aaa111" },
    { id: 2, nombre: "Chola", matricula: "als234" },
    { id: 3, nombre: "LaDelRio", matricula: "123fff" },
    { id: 4, nombre: "Tigre", matricula: "ass345" },
  ]);

  return (
    <div className="App">
      <Header />
      <h1>Embarcaciones en transito</h1>
      {embarcaciones.map( embarcacion => (
        <Embarcacion embarcacion = { embarcacion } />
      ))}
      <Footer fecha={fecha} />
    </div>
  );
}

export default App;
