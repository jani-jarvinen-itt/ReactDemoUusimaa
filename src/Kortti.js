import React, { Component } from 'react';

class Kortti extends Component {

    constructor(props) {
        super(props);
        console.log("Kortti.constructor");

        this.state = { ladattu: false, valittu: 0, data: null };
    }

    componentDidMount() {

        console.log("Kortti.componentDidMount");
        let komponentinTila = this;

        fetch('https://localhost:44331/api/v1/customers/')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log("JSON-data on ladattu!");
            console.log(JSON.stringify(myJson));

            console.log("Kutsutaan setState()-rutiinia.");
            komponentinTila.setState({ ladattu: true, data: myJson });
            console.log("setState()-rutiinia on kutsuttu.");
        });
    }

  render() {

    console.log("Kortti.render");

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
            <div className="card" style={{ width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
  }
}

export default Kortti;
