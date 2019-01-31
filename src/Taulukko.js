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

        fetch('https://localhost:44331/api/v1/customers/')
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

        let rivit = [];
        for (var i = 0; i < d.length; i++) {
            let a = d[i];
            rivit.push(<tr>
                <th scope="row">{a.customerId}</th>
                <td>{a.companyName}</td>
                <td>{a.city}</td>
                <td>{a.country}</td>
            </tr>);
          }


        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Customer Id</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                </tr>
                </thead>
                <tbody>
                    {rivit}
                </tbody>
            </table>
        );
    }
  }
}

export default Taulukko;
