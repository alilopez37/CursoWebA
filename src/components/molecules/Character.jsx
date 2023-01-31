function Character({img,name}) {
    return ( 
        <div>
            <img src={img} alt={name} />
            <span>{name}</span>
        </div>
     );
}

export default Character;