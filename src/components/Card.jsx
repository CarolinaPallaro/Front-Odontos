import React, { useState, useEffect } from "react";
import { useGlobalStates } from "../components/utils/Global.Context";
// import { Link } from "react-router-dom";
// import destacados from "../routes/Destacados";

const Card = ({ name, username, id }) => {
  const { destacadoDispatch, addDestacado, deleteDestacado } = useGlobalStates();
  const [isAdded, setIsAdded] = useState(false);

  const handleToggleDestacado = () => {
    if (isAdded) {
      "Agregar💙";
    } else {
      "Eliminar🤍";
    }
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <img
        className="imgdoctor"
        src="public\images\doctor.jpg"
        alt="foto odontologo"
      />
      <h3>{name}</h3>
      <h4>{username}</h4>
      <a href={"/detalle/" + id}>
        <img
        
         className="info-icon"
          src="public\images\info.png"
          alt="información"

        />
      </a>
      <button
        className="destacadoButton"
        onClick={handleToggleDestacado}>
        {!isAdded ? " Agregar  🤍" : "Eliminar  💙"}
      </button>
    </div>
  );
};

export default Card;
