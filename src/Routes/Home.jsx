import React, {useState, useEffect, useContext} from 'react'
//import { useNavigate } from 'react-router-dom'
import { UserContext } from "../UserContextProvider";
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {mode} = useContext(UserContext);
//  const navigate = useNavigate();
  const [vetor, setVetor] = useState([]);




  useEffect(() => {
    async function getDoctorData() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();
      setVetor(data);
    }
    getDoctorData();
    }, []);

  return (
    <main className={` ${mode ? 'dark' : ''}`} style={{ transition: 'background-color 0.5s, color 0.5s', marginTop:'5.2rem'}}>
      <h1>Home</h1>
      <div className='card-grid' >
        {vetor.map(object => (<Card key = {object.id} name={object.name} username = {object.username} id = {object.id}/>  ))}
      </div>
    </main>
  )
}

export default Home