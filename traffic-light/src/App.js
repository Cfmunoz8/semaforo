import React, { useState } from "react";
import "./App.css";

function App() {
  const [rojo, setRojo] = useState(true);
  const [amarillo, setAmarillo] = useState(false);
  const [verde, setVerde] = useState(false);
  return (
    <div>
      <div className="tube"></div>
      <div className="trafficlight">
        <div
          className={`rounded-circle bg-danger ${rojo === true ? "light" : ""}`} 
          onClick={() => {
            setRojo(!rojo);
            setAmarillo (false);
            setVerde (false);
          }}
          style={{ width: "100px", height: "100px" }}
        ></div>
        <div
          className={`rounded-circle bg-warning ${amarillo === true ? "light" : ""}`} 
          onClick={() => {
            setAmarillo(!amarillo);
            setRojo (false);
            setVerde (false);
          }}
          style={{ width: "100px", height: "100px" }}
        ></div>
        <div
          className={`rounded-circle bg-success ${verde === true ? "light" : ""}`} 
          onClick={() => {
            setVerde(!verde);
            setAmarillo (false);
            setRojo (false);
          }}
          style={{ width: "100px", height: "100px" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
