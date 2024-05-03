import React, { useState } from "react";
import "../styles/Search.scss";
import Characters from "./Characters";
import Comics from "./Comics";
import md5 from "md5";

const Search = () => {
  const [characterName, setCharacterName] = useState("");
  const [comicsData, setComicsData] = useState(null);
  const [characterData, setCharacterData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const submitSearch = (e) => {
    e.preventDefault();
    setCharacterName("");
    setCharacterData(null);
    const timeStamp = new Date().getTime();
    const hash = generateHash(timeStamp);

    setTimeout(
      () =>
        fetchData(
          `${baseUrl}characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${characterName}` //&limit=100
        ),
      2000
    );

  };

  const generateHash = (t) => {
    return md5(t + privateKey + publicKey);
  };

  const fetchData = async (endpoint) => {
    try {
      setIsLoading(true);
      const response = await fetch(endpoint);
      const data = await response.json();
      setCharacterData(data?.data?.results);
      setIsLoading(false);
      console.log(data?.data?.results);
    } catch (err) {
      console.log("Error occured: ", err);
    }
  };

  const handleCharcaterName = (e) => {
    setCharacterName(e.target.value);
  };

  const handleReset = () => {
    setCharacterData(null);
    setCharacterName("");
    setComicsData(null);
  };

  // gets comics data
  const getComicsData = async (characterId) => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    const timeStamp = new Date().getTime();
    const hash = generateHash(timeStamp);

    const url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}`;
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setComicsData(data?.data?.results);
      setIsLoading(false);
      console.log(data?.data?.results);
    } catch (err) {
      console.log("Error occured fetchnig comics data: ", err);
      setIsLoading(false);
    }
  };

  return (
    <main className="search-container">
      <form onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="enter character name"
          onChange={handleCharcaterName}
          id="characterName"
        />
        <div className="search-cta">
          <button className="btn" type="submit">
            Search
          </button>
          <button className="btn-reset" type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      {!isLoading ? (
        <section>
          <p>{characterName}</p>
          {!comicsData && characterData && (
            <Characters data={characterData} handleClick={getComicsData} />
          )}
          {comicsData && <Comics data={comicsData} />}
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Search;
