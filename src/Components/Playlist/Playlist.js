import React from "react";
import styles from './Playlist.module.css';

import Tracklilst from '../Tracklist/Tracklist';

function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}
      <Tracklilst userSearchResults={props.playlistTracks}></Tracklilst>
      <button className={styles["Playlist-save"]}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;