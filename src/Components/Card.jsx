
import React, {useContext} from "react";
import { UserContext } from "../UserContextProvider";
import { useNavigate } from 'react-router-dom'
const Card = ({ name, username, id }) => {
  const navigate = useNavigate();
  const {mode} = useContext(UserContext);
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
    <div className={`card ${mode ? 'dark' : ''}`}style={{ transition: 'background-color 0.5s, color 0.5s' }}>
        <img src = '/images/doctor.jpg' alt = 'doctorImage'></img>
        <div>{id}</div>
        <div>{name}</div>
        <div>{username}</div>
        <button onClick={addFav} className={`favButton ${mode ? 'dark' : ''}`}> <img src = '/favicon.ico' alt="favImage"></img>Add fav</button>
        <hr/>
        <button onClick={details} className={`favButton ${mode ? 'dark' : ''}`}>Info</button>
    </div>
  );
};

export default Card;
