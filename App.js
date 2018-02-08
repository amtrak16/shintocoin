import React, { Component } from 'react';
// import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { connect } from 'react-redux';
import { MINECOIN, BUYCOINS, SELLCOINS } from './state/actions';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Sell from './Sell';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <div className="App">
      <div className="pageheader">
        <img id="logo" src={require("./shinto_coin.png")} />
        <ul id="navcontainer">
          <ActiveMenuLink exact={true} to="/" label="Home" />
          <ActiveMenuLink to="/mine" label="Mine" />
          <ActiveMenuLink to="/buy" label="Buy" />
            <ActiveMenuLink to="/sell" label="Sell" />
            <ActiveMenuLink to="/ledger" label="Ledger" />

        </ul>
        </div>
        <Route exact path="/" component={Home} />
        {/* <Route path="/mine" component={Mine} />
        <Route path="/buy" component={Buy} />
        <Route path="/ledger" component={Ledger} /> */}
        <Route path="/sell" component={Sell} />

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
