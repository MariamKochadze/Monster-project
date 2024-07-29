import { useEffect, useState } from 'react';
import CardList from './componenst/card-list/card-list.component';
import SearchBox from './componenst/search-box/search-box.component';
import './App.css';

const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => resp.json())
            .then((users) => setMonsters(users));
    }, []);

    const onSearchChange = (event) => {
        const toString = event.target.value.toLowerCase();
        setSearchField(toString);
    };

    const filterMonster = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField);
    });

    const onChangeTitle = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setTitle(searchFieldString);
    };

    return (
        <div className="App" key={monsters.id}>
            <h1 className="app-title">{title}</h1>
            <SearchBox className="monsters-search-box" placeholder="search monster" onChangeHandler={onSearchChange} />
            <br />
            <SearchBox className="title-search-box" placeholder="set title" onChangeHandler={onChangeTitle} />
            <CardList monsters={filterMonster} />
        </div>
    );
};

export default App;
