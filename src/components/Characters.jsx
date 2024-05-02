import React from "react";
import "../styles/Characters.scss";

const Characters = ({ data }) => {
  return (
    <div className="character-container">
      {data.map((character) => (
        <div
          key={character.id}
          className="character-card"
          style={{
            backgroundImage: `url(${character?.thumbnail.path}.${character?.thumbnail.extension})`,
            backgroundPosition: "canter",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: '250px',
            height:'450px'
    
          }}
        >
          <h2>{character.name}</h2>
          <p>{character?.description}</p>
          <button>Learn More...</button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
