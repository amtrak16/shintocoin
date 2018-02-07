import React, { Component } from 'react';
// import './ui-toolkit/css/nm-cx/main.css'
import './App.css'
import { connect } from 'react-redux';
import { MINECOIN, BUYCOINS, SELLCOINS } from './state/actions';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Transaction {
    constructor(
        id,
        type,
        amount,
        value
    ) {
        this.id=id
        this.type = type;
        this.amount = amount;
        this.value = value;
    }
}

const initialState = {
    transactions: [new Transaction(1,'Mined', 1, 2),
                    new Transaction(2,'Mined', 1, 3),
                    new Transaction(3,'Sold', 1, 2),
                    new Transaction(4,'Sold', 1, 1),
                    new Transaction(5,'Bought', 1, 2)]
}

class Ledger extends Component {
    constructor(props) {
        super(props);

        this.state = initialState
        this.onDtlsClick = this.onDtlsClick.bind(this)
    }

    onDtlsClick({target}){
    }

    render() {
        return (
            <div>
                <h1 id="browse">Browse the Ledger</h1>
                <h2 id="hereyou"><br/>Here you can browse all ShintoCoin transactions.</h2>
                <div id="ledgerctn">
                    <div id="SL">ShintoCoin Ledger</div>
                    <table className="table" summary="This summary is for screen readers and should summarize the structure of the table headers and rows">
                        <thead>
                            <tr>
                                <th width="100">Action</th>
                                <th width="100" id="amthdr">Amount</th>
                                <th width="100" id="valhdr">Value</th>
                                <th width="100">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.transactions.map((trn) => {
                            return (
                                <tr>
        <td>{trn.type}</td>
        <td id="trnamt" className="text-right">{trn.amount}</td>
        <td id="trnval">{trn.value}</td>
        <td><button id="ldgrbtn" value={trn.id}><Link to={`/LedgerDetails/${trn.id}`}>Details</Link></button></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Ledger;