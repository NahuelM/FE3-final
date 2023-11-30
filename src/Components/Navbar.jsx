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
    <nav className={` ${mode ? 'dark' : ''}`}>
      <img src = '/DH.ico'></img>
      <ul>
        <li><button  className={` ${mode ? 'dark' : ''}`} onClick={() => {navigate('/home')}}>Home</button></li>
        <li><button  className={` ${mode ? 'dark' : ''}`} onClick={() => {navigate('/favs')}}>Favoritos</button> </li>
        <li><button  className={` ${mode ? 'dark' : ''}`} onClick={() => {navigate('/contact')}}>Contacts</button></li>
        <li><button  className={` ${mode ? 'dark' : ''}`} onClick={changeThemeClick}>Change theme</button></li>
      </ul>
     
    </nav>
  )
}

export default Navbar