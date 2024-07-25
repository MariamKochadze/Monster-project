import './App.css';
import { Component } from 'react';
import CardList from './componenst/card-list/card-list.component';
import SearchBox from './componenst/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => resp.json())
            .then((data) =>
                this.setState(() => {
                    return { monsters: data };
                })
            );
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField };
        });
    };

    render() {
        const { monsters, searchField } = this.state;

        const filterMonster = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="App">
                <SearchBox
                    onChangeHandler={this.onSearchChange}
                    className="search-box"
                    type="search"
                    placeholder="search monster"
                />
                <CardList monsters={filterMonster} />
            </div>
        );
    }
}

export default App;
