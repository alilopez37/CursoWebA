import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";

function FormLogin() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const handlerFocus = () => {
    console.log("focus");
  };

  const handlerChange = (e) => {
    setUsername(e.target.value)
  };

  const handlerClick = (e) => {
    e.preventDefault();
    setError('Error en la validación del nombre')
  }

  return (
    <div>
      <img src={Logo} alt="Logo de la empresa" />
      <form>
        <input type="text" value={username}
        onFocus={handlerFocus} 
        onChange={handlerChange}  />
        <input type="password" />
        <button onClick={handlerClick}>Iniciar sesión</button>
        <label>{error}</label>
        <Link to="/register">Regístrate</Link>
      </form>
    </div>
  );
}

export default FormLogin;
