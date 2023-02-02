import Character from "../molecules/Character";
import '../../assets/styles/CharacterList.css'
function CharacterList({characters}) {
    return (
        <div className="character-container">
            {characters.map( character => <Character 
                key={character.id}
                img={character.image}
                name={character.name}/>)
            
            }
        </div>
      );
}

export default CharacterList;