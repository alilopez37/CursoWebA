import Logo from "../../assets/react.svg";

function FormLogin() {
  return (
    <div>
      <img src={Logo} alt="Logo de la empresa" />
      <form>
        <input type="text" />
        <input type="password" />
        <button>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default FormLogin;
