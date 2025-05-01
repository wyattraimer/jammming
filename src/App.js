import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar></SearchBar>
        <SearchResults></SearchResults>
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
