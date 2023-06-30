import React, { Fragment } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../components/utils/Global.Context";
import { useState } from "react";

const Destacados = () => {
  const {deleteDestacado,  destacadoState, themeState, destacadoDispatch } = useGlobalStates();

  // console.log(destacadoState)
  
  const [odontologosFavoritos, setOdontologosFavoritos] = useState(
    JSON.parse(localStorage.getItem('odontologosFavoritos') || '[]')
  )




  // const deleteDestacado = (id) => {
  //   destacadoDispatch({ type: "DELETE_DESTACADO", payload: id });
  // };

  return (
    <div className={themeState.className}>
      <h1>Odontologos Destacados</h1>
      <div className="card-grid light">
        {odontologosFavoritos.map((odontologo) => (
          <Card key={odontologo.id}
          name={odontologo.name}
          username={odontologo.username}
          id={odontologo.id}
          odontologo={odontologo}


          >
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Destacados;