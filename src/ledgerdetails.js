import React, { Component } from 'react';
// import './ui-toolkit/css/nm-cx/main.css'
import './App.css'
import { connect } from 'react-redux';
import { MINECOIN, BUYCOINS, SELLCOINS } from './state/actions';
import { BrowserRouter, Route, Link } from 'react-router-dom'

// class Transaction {
//     constructor(
//         type,
//         amount,
//         value
//     ) {
//         this.type = type;
//         this.amount = amount;
//         this.value = value;
//     }
// }

// const initialState = {
//     transactions: [new Transaction('Mined', 1, 2),
//                     new Transaction('Mined', 1, 3),
//                     new Transaction('Sold', 1, 2),
//                     new Transaction('Sold', 1, 1),
//                     new Transaction('Bought', 1, 2)]
// }

class LedgerDetails extends Component {
    constructor(props) {
        super(props);

        // this.state = initialState
    }
    render() {
        console.log(this.props.match.params.id)
        const transaction = this.props.transactions.find(({ id }) => id === this.props.match.params.id)
        console.log(transaction)
        
        return (
            <div>
                <h1 id="browse">Ledger Transaction Details</h1>
                <h2 id="hereyou"><br/>Detailed view of a transaction from the ledger.</h2>
                <div id="ledgerctn">
                    <p> Transaction: {transaction.id} </p>
                    <p> {transaction.type} {transaction.amount} ShintoCoin </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions,
    }
}

const wrappedConnect = connect(mapStateToProps)(LedgerDetails);
export default wrappedConnect;