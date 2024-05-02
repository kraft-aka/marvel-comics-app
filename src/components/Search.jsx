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

    const timeStamp = new Date().getTime();
    const hash = generateHash(timeStamp);

    setTimeout(
      () =>
        fetchData(
          `${baseUrl}characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${characterName}&limit=100`
        ),
      2000
    );

    setCharacterName("");
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

  const getComicsData = () => {};

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
          {characterData && <Characters data={characterData} />}
          {comicsData && <Comics />}
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Search;
