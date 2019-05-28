import * as React from 'react';
import '../App.css';

import CensusStatList from '../containers/CensusStatList';
class App extends React.Component {
  render() {
    return (
      <>
      <header className="App-header">
      <p>Pick your variable for the census database query</p>
    </header>
        <CensusStatList />
      </>
    );
  }
}

export default App;
