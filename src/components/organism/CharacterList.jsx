import Character from "../molecules/Character";
function CharacterList({characters}) {
    return (
        <div>
            {characters.map( character => <Character 
                img={character.image}
                name={character.name}/>)
            }
        </div>
      );
}

export default CharacterList;