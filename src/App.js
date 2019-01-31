import React, { Component } from 'react';
import Taulukko from './Taulukko';
import Navigaatio from './Navigaatio';

class App extends Component {
  render() {
    return (
      <div>
        <Navigaatio />

        <h1>Tämä on App-komponentti</h1>
        <p>Perustekstiä.</p>

        <Taulukko />
      </div>
    );
  }
}

export default App;
