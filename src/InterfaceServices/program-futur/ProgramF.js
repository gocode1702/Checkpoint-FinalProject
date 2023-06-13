import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products }  from "../../data/Data-programF";
import Futur from "./Futur";



export default function ProgramF() {
  return (
    <div className="container-fluid">
      <Futur Data={Products} />
     
    </div>
  );
}



