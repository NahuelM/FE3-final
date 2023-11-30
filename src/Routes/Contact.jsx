import React, {useContext} from 'react'
import Form from '../Components/Form'
import { UserContext } from "../UserContextProvider";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {mode} = useContext(UserContext);
  return (
    <div  className={` ${mode ? 'dark' : ''}`} style={{ transition: 'background-color 0.5s, color 0.5s' }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact