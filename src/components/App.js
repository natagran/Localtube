import React, { Component } from 'react';
import Map from 'components/map';
import VideoList from 'components/youtube/videoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Localtube</h1>
        </header>
        <div className="App-map">
          <Map />
        </div>
        <div>
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
