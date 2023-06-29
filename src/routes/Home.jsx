import React from "react";
import Card from "../components/Card";
import { useGlobalStates } from "../components/utils/Global.Context";


const Home = (ADD_DESTACADO) => {
  const { odontologoState, themeState } = useGlobalStates();
  const addDestacado = (destacado) => {
    dispatch({ type: 'ADD_DESTACADO', payload: destacado });
  };

  // console.log(odontologoState);
  return (
    <main className={themeState.className}>
    <h1>Listado de Odontologos</h1>
    <div className="card-grid">
      {odontologoState.odontologoList.map((odontologo) => (
       
          <Card key={odontologo.id}
          name={odontologo.name}
          username={odontologo.username}
          id={odontologo.id}>
          </Card>
      ))}
    
    </div>
  </main>
  );
};

export default Home;