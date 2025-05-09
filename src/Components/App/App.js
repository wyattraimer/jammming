import React, {useState, useEffect} from "react";
import styles from './App.module.css';

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App () {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('Ex Playlist Name');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = track => {
    const existingTrack = playlistTracks.find(t => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    existingTrack ? console.log("This track already exists.") : setPlaylistTracks(newTrack);
  }

  const removeTrack = track => {
    const existingTrack = playlistTracks.filter(t => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  const updatePlaylistName = name => {
    setPlaylistName(name);
  }

    return (
      <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          <SearchBar></SearchBar>
          <div className={styles["App-playlist"]}>
            <SearchResults userSearchResults={searchResults} onAdd={addTrack}></SearchResults>
            <Playlist 
              playlistName={playlistName} 
              playlistTracks={playlistTracks}
              onRemove={removeTrack}
            >
            </Playlist>
          </div>
        </div>
      </div>
        );
}

export default App;