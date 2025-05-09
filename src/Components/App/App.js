import React, {useState} from "react";
import styles from './App.module.css';

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { Spotify } from "../../util/Spotify";

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

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(t => t.uri)
  }

  const search = term => {
    //b/c it's returning a promise
    Spotify.search(term).then(result => setSearchResults(result));
    console.log(term);
  }

    return (
      <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          <SearchBar
            onSearch={search}
          />
          <div className={styles["App-playlist"]}>
            <SearchResults userSearchResults={searchResults} onAdd={addTrack}></SearchResults>
            <Playlist 
              playlistName={playlistName} 
              playlistTracks={playlistTracks}
              onRemove={removeTrack}
              onNameChange={updatePlaylistName}
              onSave={savePlaylist}
            />
          </div>
        </div>
      </div>
    );
}

export default App;