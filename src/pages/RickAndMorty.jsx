import { useState } from "react";
import { Link } from "react-router-dom";
import CharacterList from "../components/organism/CharacterList";
function RickAndMorty({session}) {
    const [characters,setCharacters] = useState([])
    const handlerClick = (e) => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            setCharacters(data.results)
        })
    }

    if (session)
        return (
            <>
                <h2>Rick & Morty</h2>
                <button onClick={handlerClick} >Mostrar personajes</button>
                <CharacterList characters={characters}/>
            </>
        );
    else
            return (
                <>
                    <h1>Lo lamento no estás logueado</h1>
                    <Link to="/">Regresar</Link>
                </>
            )
}

export default RickAndMorty;