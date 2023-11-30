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
      setData(data);
    }
    getDoctorData();
    }, []);
  return (
    <div className={` ${mode ? 'dark' : ''}`} >
      <h1>Detail Dentist id </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>website</th>
        </tr>
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td>{data.website}</td>
        </tr>
      </table>
        
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail