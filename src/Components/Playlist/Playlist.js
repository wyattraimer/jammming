import React from "react";
import styles from './Playlist.module.css';

import Tracklilst from '../Tracklist/Tracklist';

function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <Tracklilst 
        userSearchResults={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      >
      </Tracklilst>
      <button className={styles["Playlist-save"]}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;