import React from "react";
import styles from './Tracklist.module.css';

import Track from '../Track/Track';

function Tracklist (props) {
    return (
        <div className={styles.TrackList}>
        {props.userSearchResults.map(track => (
          <Track track={track} key={track.id} onAdd={props.onAdd} isRemoval={props.isRemoval}></Track>
        ))}
      </div>
    );
}

export default Tracklist;