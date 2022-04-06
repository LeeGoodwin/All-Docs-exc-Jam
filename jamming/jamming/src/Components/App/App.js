import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1},
      {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],
      playListName: 'My Playlist',
      playListTracks: [{playListName: 'playlistname1', playListArtist: 'playlistartist1', playListAlbum: 'playlistalbum1', Id: 4},
      {playListName: 'playlistname2', playListArtist: 'playlistartist2', playListAlbum: 'playlistalbum2', Id: 5},
      {playListName: 'playlistname3', playListArtist: 'playlistartist3', playListAlbum: 'playlistalbum3', Id: 6}]
    }

  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playListName={this.state.playListName}
                      playListTracks={this.state.playListTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
