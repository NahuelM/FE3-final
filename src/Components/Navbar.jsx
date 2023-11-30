import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../UserContextProvider";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate()

  const {mode, toggleStyle} = useContext(UserContext);
  const changeThemeClick = ()=>{
    toggleStyle();
  }

  return (
    <nav style={{ background: mode ? 'black' : 'white', color: mode ? 'white' : 'black' }}>
      <button onClick={() => {navigate('/home')}}>Home</button>
      <button onClick={() => {navigate('/favs')}}>Favoritos</button>
      <button onClick={() => {navigate('/contact')}}>Contacts</button>
      <button onClick={() => {navigate('/details')}}>Details</button>
      <button onClick={changeThemeClick}>Change theme</button>
    </nav>
  )
}

export default Navbar