import React, {useState, useEffect} from "react";
import styles from './App.module.css';

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App () {
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          <SearchBar></SearchBar>
          
          <div className={styles["App-playlist"]}>
            <SearchResults></SearchResults>
            <Playlist></Playlist>
          </div>
        </div>
      </div>
        );
}

export default App;