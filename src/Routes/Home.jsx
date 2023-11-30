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
    <main className="" style={{ background: mode ? 'black' : 'white', color: mode ? 'white' : 'black' }}>
      <h1>Home</h1>
      <div className='card-grid' >
      <ul>
        {vetor.map(object => (<Card key = {object.id} name={object.name} username = {object.username} id = {object.id}/>  ))}
      </ul>
      </div>
    </main>
  )
}

export default Home