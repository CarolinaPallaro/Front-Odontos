import React, { useEffect, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalStates } from "../components/utils/Global.Context";


const Detalle = () => {
  const { id } = useParams();
  const { odontologoState, odontologoDispatch, getOdontologo,themeState } =
    useGlobalStates();
  const navigate = useNavigate();
  useEffect(() => {
    getOdontologo(id);
  }, [id]);

  return (
    <div className={themeState.className}>
      <h1>Ver mas sobre este Odontólogo</h1>
      <div className="card">
        <h3>{odontologoState.odontologoDetalle.name}</h3>
        <h4>{odontologoState.odontologoDetalle.email}</h4>
        <p>{odontologoState.odontologoDetalle.phone}</p>
        <p>{odontologoState.odontologoDetalle.website}</p>
      </div>
      <button className="backButton" onClick={() => navigate(-1)}>
        ⬅
      </button>
    </div>
  );
};

export default Detalle;