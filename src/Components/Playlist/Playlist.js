import React from "react";
import styles from './Playlist.module.css';

import Tracklilst from '../Tracklist/Tracklist';

function Playlist(props) {
  function handleNameChange({ target }){
    props.onNameChange(target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
      <Tracklilst 
        userSearchResults={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className={styles["Playlist-save"]}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;