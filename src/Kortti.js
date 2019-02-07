import React, { Component } from 'react';

class Kortti extends Component {

    constructor(props) {
        super(props);
        console.log("Kortti.constructor");

        this.state = { ladattu: false, valittu: 0, data: null };

        this.siirryEdelliseen = this.siirryEdelliseen.bind(this);
        this.siirrySeuraavaan = this.siirrySeuraavaan.bind(this);
    }

    componentDidMount() {

        console.log("Kortti.componentDidMount");
        let komponentinTila = this;

        fetch('https://localhost:44331/api/v1/customers/')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log("JSON-data on ladattu!");
                console.log(JSON.stringify(myJson));

                console.log("Kutsutaan setState()-rutiinia.");
                komponentinTila.setState({ ladattu: true, data: myJson });
                console.log("setState()-rutiinia on kutsuttu.");
            });
    }

    siirryEdelliseen() {
        console.log("Kortti.siirryEdelliseen");
        let nykyinen = this.state.valittu;

        if (nykyinen > 0) {
            let uusi = nykyinen - 1;

            this.setState({ valittu: uusi });

            /*
            this.setState({ ladattu: this.state.ladattu,
                valittu: uusi,
                data: this.state.data });
            */
        }
    }

    siirrySeuraavaan() {
        console.log("Kortti.siirrySeuraavaan");
        let nykyinen = this.state.valittu;
        let lkm = this.state.data.length;
        if (nykyinen < (lkm - 1)) {

            let uusi = nykyinen + 1;
            this.setState({ ...this.state, valittu: uusi });
        }
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

            let a = this.state.data[this.state.valittu];
            return (
                <div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{a.companyName}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{a.customerId} {a.country}</h6>
                            <p className="card-text">{a.contactName}</p>
                        </div>
                    </div>
                    <button className="btn btn-info" onClick={this.siirryEdelliseen}>Edellinen</button>

                    {/*
                    <button className="btn btn-info" onClick={() => this.siirryEdelliseen}>Edellinen</button>
                    */}

                    <button className="btn btn-info" onClick={this.siirrySeuraavaan}>Seuraava</button>
                </div>
            );
        }
    }
}

export default Kortti;
