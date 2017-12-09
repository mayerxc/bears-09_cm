import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import ResultsBox from './components/ResultsBox'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { podcasts: [] }

    this.podcastSearch('syntax')  // Initial search on page load
   }

  podcastSearch(term) {
    // https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
    /*    iTunes Search API logic here    */
    fetch(`https://itunes.apple.com/search?media=podcast&term=${term}`)
      .then(response => response.json())
      .then(data=> {
        this.setState({podcasts: data.results})
        console.log(this.state.podcasts);
      });
  }


  render() {
    return (
      <div>
        <SearchBox onSearchTermChange={term => this.podcastSearch(term)} />
        <ResultsBox>{this.state.podcasts}</ResultsBox>
      </div>
    );
  }
}

export default App;



/*

Highlights by country
`https://itunes.apple.com/${country}/rss/toppodcasts/limit=25/json`

Podcast feed
`https://itunes.apple.com/lookup?id=${id}`

*/