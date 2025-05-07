import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className={styles.App}>
      <header className="App-header">
        <SearchBar></SearchBar>
      </header>
    </div>
  );
}

export default App;
