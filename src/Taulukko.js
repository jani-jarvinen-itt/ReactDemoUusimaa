import React, { Component } from 'react';

class Taulukko extends Component {

    constructor(props) {
        super(props);
        console.log("Taulukko.constructor");

        this.state = { ladattu: false, data: null };
    }

    componentDidMount() {

        console.log("Taulukko.componentDidMount");
        let komponentinTila = this;

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log("JSON-data on ladattu!");
            console.log(JSON.stringify(myJson));

            alert("Testi");

            console.log("Kutsutaan setState()-rutiinia.");
            komponentinTila.setState({ ladattu: true, data: myJson });
            console.log("setState()-rutiinia on kutsuttu.");
        });
    }

  render() {

    console.log("Taulukko.render");

    if (this.state.ladattu === false) {
        return (
            <div>
                <p>Ladataan...</p>
            </div>
        );
    }
    else {

        let d = this.state.data;

        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">User Id</th>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Completed</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{d.userId}</th>
                    <td>{d.id}</td>
                    <td>{d.title}</td>
                    <td>{d.completed}</td>
                </tr>
                
                </tbody>
        </table>
        );
    }
  }
}

export default Taulukko;
