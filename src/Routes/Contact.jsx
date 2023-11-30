import React, {useContext} from 'react'
import Form from '../Components/Form'
import { UserContext } from "../UserContextProvider";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {mode} = useContext(UserContext);
  return (
    <div style={{ background: mode ? 'black' : 'white', color: mode ? 'white' : 'black' }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact