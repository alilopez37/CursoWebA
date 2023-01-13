import {useNavigate} from 'react-router-dom';

function FormRegister() {
    const navigate = useNavigate()

    const clickHandler = (e)=>{
        e.preventDefault();
        navigate("/home")
    }

    return ( 
        <form action="">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" />

            <label>Usuario
                <input type="text" />
            </label>

            <label>Password</label>
            <input type="password" />

            <button type="button" onClick={clickHandler}>Iniciar sesión</button>
        </form>
     );
}

export default FormRegister;