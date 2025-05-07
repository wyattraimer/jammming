import './App.module.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Tracklist from '../Tracklist/Tracklist.js';
import Track from '../Track/Track.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar></SearchBar>
        <SearchResults></SearchResults>
        <Playlist></Playlist>
        <Tracklist></Tracklist>
        <Track></Track>
      </header>
    </div>
  );
}

export default App;
