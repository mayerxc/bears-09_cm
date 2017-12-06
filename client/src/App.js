import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { podcasts: [] }

    this.podcastSearch('')  // Initial search on page load
  }

  podcastSearch(term) {
    // iTunes API logic here
    console.log(term);
  }

  render() {
    return (
      <SearchBox onSearchTermChange={term => this.podcastSearch(term)} />
    );
  }
}

export default App;
