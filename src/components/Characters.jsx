import React from "react";
import "../styles/Characters.scss";

const Characters = ({ data, handleClick }) => {
  return (
    <div className="character-container">
      {data.map((character) => (
        <div
          key={character.id}
          className="character-card"
          style={{
            backgroundImage: `url(${character?.thumbnail.path}.${character?.thumbnail.extension})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "250px",
            height: "450px",
          }}
          
        >
          <h2 className="character-name">{character.name}</h2>
          <p>{character?.description.slice(0,25)}</p>
          <button onClick={() => handleClick(character.id)} className="character-btn">
            Learn More...
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
