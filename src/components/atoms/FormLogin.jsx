import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";

function FormLogin() {
  const [description, setDescription] = useState({
    username: "",
    password: "",
  });
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handlerFocus = () => {
    console.log("focus");
  };

  const handlerChange = (e) => {
    setDescription({...description,username: e.target.value});
  };
  const handlerChangePassword = (e) => {
    setDescription({...description,password: e.target.value});
  };

  const handlerClick = (e) => {
    e.preventDefault();
    setError("Error en la validación del nombre");
    setDescription({ msn: "Hola", v: 1, alias: "By" });
    console.log(description);
  };

  return (
    <div>
      <img src={Logo} alt="Logo de la empresa" />
      <form>
        <input
          type="text"
          value={description.username}
          onFocus={handlerFocus}
          onChange={handlerChange}
        />
        <input
          type="password"
          value={description.password}
          onChange={handlerChangePassword}
        />
        <button onClick={handlerClick}>Iniciar sesión</button>
        <div>
          <label>{JSON.stringify(description)}</label>
        </div>
        <Link to="/register">Regístrate</Link>
      </form>
    </div>
  );
}

export default FormLogin;
