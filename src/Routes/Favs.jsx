import React, {useContext} from "react";
import {UserContext} from "../UserContextProvider";
import Card from "../Components/Card";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const userContext = useContext(UserContext);
  
// Obtenemos la información del usuario y la
// función de actualización.
  const { mode, users } = userContext;
  console.log(users)
  return (
    <div style={{ background: mode ? 'black' : 'white', color: mode ? 'white' : 'black' }}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        <ul>
          {users.map(object => (<Card key = {object.id} name={object.name} username = {object.username} id = {object.id}/>  ))}
        </ul>
      </div>
    </div>
  );
};

export default Favs;
