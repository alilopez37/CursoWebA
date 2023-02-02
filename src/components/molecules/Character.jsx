import '../../assets/styles/Character.css'
function Character({img,name}) {
    return ( 
        <div className="character-container_character">
            <img src={img} alt={name} />
            <div>
                <span>{name}</span>
            </div>
        </div>
     );
}

export default Character;