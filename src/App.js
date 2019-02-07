import React, { Component } from 'react';
import Navigaatio from './Navigaatio';
import Kortti from './Kortti';

class App extends Component {
  render() {
    return (
      <div>
        <Navigaatio />

        <h1>Tämä on App-komponentti</h1>
        <p>Perustekstiä.</p>

        <Kortti />
      </div>
    );
  }
}

export default App;
