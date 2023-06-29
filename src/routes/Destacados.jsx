import React, { Fragment } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../components/utils/Global.Context";

const Destacados = () => {
  const {deleteDestacado,  destacadoState, themeState, destacadoDispatch } = useGlobalStates();

  // console.log(destacadoState)
  
  

  // const deleteDestacado = (id) => {
  //   destacadoDispatch({ type: "DELETE_DESTACADO", payload: id });
  // };

  return (
    <div className={themeState.className}>
      <h1>Odontologos Destacados</h1>
      <div className="card-grid light">
        {destacadoState.map((destacado) => (
          <Link key={destacado.id} to={"/Detalle/" + destacado.id}>
            {" "}
            <Card 
            
            odontologo={destacado} 
            deleteDestacado={deleteDestacado} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destacados;