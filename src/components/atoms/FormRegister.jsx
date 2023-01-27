import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';

function FormRegister() {
    const navigate = useNavigate()

    const name = useRef()
    const username = useRef()
    const password = useRef()

    const form = useRef()

    const handlerClick = (e)=>{
        e.preventDefault();
        //navigate("/home")
        const newForm = new FormData(form.current)
        let newName = newForm.get('name')
        alert(`Nombre: ${newForm.get('name')} \nUsername: ${newForm.get('username')}`)
    }

    return ( 
        <form ref={form}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" />
            </div>

            <div>
                <label>Usuario
                    <input type="text" name="username"/>
                </label>
            </div>

            <div>
                <label>Password</label>
                <input type="password" ref={password} />
            </div>

            <button type="button" onClick={handlerClick}>Iniciar sesión</button>
        </form>
     );
}

export default FormRegister;