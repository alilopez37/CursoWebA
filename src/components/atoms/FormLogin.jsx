import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";

function FormLogin() {
  return (
    <div>
      <img src={Logo} alt="Logo de la empresa" />
      <form>
        <input type="text" />
        <input type="password" />
        <button>Iniciar sesión</button>
        <Link to="/register">Regístrate</Link>
      </form>
    </div>
  );
}

export default FormLogin;
