import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';
import Tracklist from './Tracklist/Tracklist.js';
import Track from './Track/Track.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar></SearchBar>
        <button type="button">Search</button>
        <SearchResults></SearchResults>
        <Playlist></Playlist>
        <Tracklist></Tracklist>
        <Track></Track>
        <button type="button">Save To Spotify</button>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://org.coloradomesa.edu/~wwraimer/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
