import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroller from "./Scroller";
// import { bio } from './robot';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            info: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({info:users})})
    }

    onSearch = (event) => {
        this.setState({searchField : event.target.value})
    }

    render() {
        const {info,searchField} = this.state;
        const filteredBio = info.filter(bio => {
            return bio.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !filteredBio.length ?
            (<div>
                <h1>Loading</h1>
            </div>) :

            (
                <div className='tc'>
                <h1 className="f2">RoboFriend </h1>
                <SearchBox searchChange={this.onSearch}/>
                <Scroller>
                    <CardList  bio={filteredBio}/>
                </Scroller>
            </div>
            )
    }
}

 export default App;
