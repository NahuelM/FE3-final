
import React, {useContext} from "react";
import { UserContext } from "../UserContextProvider";
import { useNavigate } from 'react-router-dom'
const Card = ({ name, username, id }) => {
  const navigate = useNavigate()
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    handleAddUser()
  }

  const details = () => {
    navigate('/details/'+id);
  }

  const {addUser} = useContext(UserContext);

  const handleAddUser = () => {
    const newUser = {
      id: id,
      name: name,
      username: username
    };
    addUser(newUser);
  };

  return (
    <div className="card" >
        <div>{id}</div>
        <div>{name}</div>
        <div>{username}</div>
        <button onClick={addFav} className="favButton">Add fav</button>
        <hr/>
        <button onClick={details} className="favButton">Info</button>
    </div>
  );
};

export default Card;
