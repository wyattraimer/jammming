import React, { useState } from "react";
import styles from './SearchBar.module.css';

function SearchBar (props) {
  const [term, setTerm] = useState('');

  const passTerm = () => {
    if (term) {
        console.log("Searching for term:", term);
        props.onSearch(term);
    } else {
        console.warn("Search term is empty!");
    }
  }


  const handleTermChange = ({ target }) => {
    setTerm(target.value);
  }

    return (
        <div className={styles.SearchBar}>
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={handleTermChange}
        />
        {/* <button className={styles.SearchButton} onClick={passTerm}> */}
        <button className={styles.SearchButton} onClick={() => passTerm(term)}>
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar;