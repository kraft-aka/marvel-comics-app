import React, { useState } from 'react'
import '../styles/Search.scss';



const Search = () => {

  const [characterName, setCharacterName] = useState('')
  const [comicsData, setComicsData] = useState(null)
  const [characterData, setCharacterData] = useState(null);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  const privateKey = import.meta.env.VITE_PRIVATE_KEY 
  const baseUrl = import.meta.env.VITE_BASE_URL


  const submitSearch = () => { }

  const handleCharcaterName = (e) => { }

  const handleReset = () => { }

  return (
    <main>
      <form onSubmit={submitSearch}>
        <input type="text" placeholder='enter character name' onClick={handleCharcaterName} />
        <div className='search-cta'>
          <button className="btn" type='submit'>Search</button>
          <button className="btn-reset" type='reset' onClick={handleReset}>Reset</button>
        </div>
      </form>
    </main>
  )
}

export default Search