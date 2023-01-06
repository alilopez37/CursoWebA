import Logo from '../../assets/react.svg'
import '../../assets/styles/Header.css'
function Header(){

    return(
        <header>
            <img src={Logo} alt="Logo de la empresa" />
            <h1>Programación web</h1>
        </header>
    )
}

export default Header;