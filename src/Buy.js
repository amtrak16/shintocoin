import React, { Component } from 'react'
// import './ui-toolkit/css/nm-cx/main.css'
import './App.css'
import { connect } from 'react-redux'
import { MINECOIN, BUYCOINS, SELLCOINS, buyCoins } from './state/actions'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    console.log("hi from map to state")
    return {
      
        curValue: state.curValue,
        curAmount: state.curAmount

    }


    }


const mapDispatchToProps = (dispatch) => {

    console.log(dispatch)
        return { 
            buyCoins: value => dispatch (buyCoins(value))
        }
    }



class Buy extends Component {
    constructor(props){
        super(props)
            this.state = {
                buyCoinsInput: 0,
                errorMessage: '',
        }
    }

    handleBuyCoinInput(e){
        console.log("handle buy coin input")
        console.log(e.target.value)
        let errorMessage = '';
        if (e.target.value < 0){
            errorMessage = "Can not buy negative coins"
        }

        this.setState( {buyCoinsInput: parseInt(e.target.value), errorMessage})
    }

  
    
  render () {

    

    return (
        <div>
            <h2>Buy Shinto Coins</h2>



            <p> Current Shinto Coin Value is  ${this.props.curValue}</p>
            <p>Number of Shinto Coins owned is {this.props.curAmount}</p>

            <div>
                <input type="number" value={this.state.buyCoinsInput} onChange={this.handleBuyCoinInput.bind(this)} placeholder="How many ShintoCoins would you like to buy?" />
                <button onClick={(e) => {e.preventDefault() ; this.props.buyCoins(this.state.buyCoinsInput)}}>Buy</button>
                {this.state.errorMessage.trim() != '' && 
                    <p style={{ color: 'red'}}> {this.state.errorMessage} </p>
            }
            </div>
        </div>
    )
      }

    
}
const ConnectedBuy = connect(mapStateToProps, mapDispatchToProps)(Buy);
export default ConnectedBuy;
