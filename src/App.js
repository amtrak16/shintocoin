import React, { Component } from 'react';
// import './ui-toolkit/css/nm-cx/main.css'
import './App.css'
import { connect } from 'react-redux';
import { MINECOIN, BUYCOINS, SELLCOINS } from './state/actions';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import  Mine  from './Mine';
import Sell from './Sell';
import Ledger from './ledger';
import LedgerDetails from './ledgerdetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <div className="App">
      <div className="pageheader">
        <img id="logo" src={require("./shinto_coin.png")} />
        <ul id="navcontainer">
          <ActiveMenuLink exact={true} to="/" label="Home" />
          <ActiveMenuLink to="/mine" label="Mine Coins" />
          <ActiveMenuLink to="/buy" label="Buy Coins" />
          <ActiveMenuLink to="/sell" label="Sell Coins" />
          <ActiveMenuLink to="/ledger" label="Browse Ledger" />

        </ul>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/mine" component={Mine} />
        <Route path="/sell" component={Sell} />
        {/* <Route path="/buy" component={Buy} /> */}
        <Route path="/ledger" component={Ledger} />
        <Route path="/ledgerdetails/:id" component={LedgerDetails} />
      </div>
      </BrowserRouter>
    );
  }
}

const Home = (props) => {
return (
  <div>
    <h1>ShintoCoin</h1>
  <p>Welcome to ShintoCoins, ShintoCoins are coins made by solving<br /> algorithms! To get started, head over to Mine Coins' and get to work!</p>
  </div>
)
}

const ActiveMenuLink = ({ label, to, exact }) => (
  <Route path={to} exact={exact} children={({ match }) => (
    <li className={`${match ? ' active' : ''}`}><Link to={to}>{label}</Link></li>
  )} />
)

export default App;
