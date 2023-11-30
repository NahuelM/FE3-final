import React, {useState, useEffect, useContext} from 'react'
import {Link, useParams } from 'react-router-dom';
import { UserContext } from "../UserContextProvider";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {mode} = useContext(UserContext);
  const { id } = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [data, setData] = useState({});




  useEffect(() => {
    async function getDoctorData() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
      const data = await resp.json();
      console.log(data)
      setData(data);
    }
    getDoctorData();
    }, []);
  return (
    <div style={{ background: mode ? 'black' : 'white', color: mode ? 'white' : 'black' }} >
      <h1>Detail Dentist id </h1>
      
        <Link key={data.id} to={`${data.id}`} >
            <li/>{data.name}
            <li/>{data.email}
            <li/>{data.phone}
            <li/>{data.website}
        </Link>
        
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail