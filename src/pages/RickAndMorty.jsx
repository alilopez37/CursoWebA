import { useState } from "react";
import CharacterList from "../components/organism/CharacterList";
function RickAndMorty() {
    const [characters,setCharacters] = useState([])
    const handlerClick = (e) => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            setCharacters(data.results)
        })
    }

    return (
        <>
            <h2>Rick & Morty</h2>
            <button onClick={handlerClick} >Mostrar personajes</button>
            <CharacterList characters={characters}/>
        </>
      );
}

export default RickAndMorty;