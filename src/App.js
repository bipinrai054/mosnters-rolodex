import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/SearchBox';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const filteredMonsters = monsters.filter((monster) => {
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className='App'>
      <SearchBox
        placeholder='Search Monsters'
        onChange={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
