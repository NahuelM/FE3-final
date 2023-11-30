import React, {useState}from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [datos, setDatos] = useState({nombre:'', email:''})
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const updateNombre = (event) => {
    setDatos({nombre: event.target.value.trim(), email:datos.email});
  }
  const updateEmail = (event) => {
    setDatos({nombre: datos.nombre, email:event.target.value.trim()});
  }
  const handleIngresar = (e) => {
    e.preventDefault(); 
    console.log(datos, datos.nombre, datos.email)
    if(datos.nombre.length > 5 && emailRegex.test(datos.email)){
      setDatos({nombre:datos.nombre, email:datos.email});
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
    
  }
  return (
    <div>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" onChange={updateNombre}/>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" onChange={updateEmail} />
        <button style={{backgroundColor:"green", marginTop: '10px'}} onClick={(e) => handleIngresar(e)}>Enviar</button>
        <div>{show ? < h3 style ={{color:'green'}}> Gracias {datos.nombre} nos comunicaremos con usted lo antes posible</h3> :null}
          {error && <h3 style={{ color: 'red'}}>Por favor chequea que la información sea correcta</h3>}
        </div>
          
      </form>
      
    </div>
    
  );
};

export default Form;
