import type React from "react";
import Alert from "./alertas";
import AlertasApi from "./alertasApi";
import BarGrafica from "./Bar";

const App: React.FC = () => {
  return (
    <div>
    <Alert></Alert>
    <AlertasApi></AlertasApi>
    <BarGrafica></BarGrafica>
    </div>

  )
};

export default App;
