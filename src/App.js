import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';
import Tracklist from './Tracklist/Tracklist.js';
import Track from './Track/Track.js';
import Button from './Button/Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar></SearchBar>
        <Button label="Search"></Button>
        <SearchResults></SearchResults>
        <Playlist></Playlist>
        <Tracklist></Tracklist>
        <Track></Track>
        <Button label='Save To Spotify'></Button>
      </header>
    </div>
  );
}

export default App;
