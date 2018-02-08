import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SELLCOINS, sellCoins } from './state/actions';

class Sell extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            val: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        if (this.props.curValue - e.target.value < 0 || this.props.curAmount - e.target.value < 0){
            window.alert("Transaction unavailable: balance can not be negative.")
        } else
        this.setState({val: e.target.value})
    }

    render() {
        return(
        <div>
            <h1>Sell ShintoCoins</h1>
            <h4>Current ShintoCoin Value: ${this.props.curValue}.00</h4>
            <h4>Number of ShintoCoins Owned: {this.props.curAmount}</h4>
            <form>
                <input type="number" placeholder="Number" onChange={this.handleChange} />
                <button type="submit"
                    onClick = {(e) => {e.preventDefault(); this.props.sellCoins(this.state.val)}}>Submit</button>
            </form>
       </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        curValue: state.curValue,
        curAmount: state.curAmount
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sellCoins: val =>  dispatch(sellCoins(val))
    }
}
const wrappedConnect = connect(mapStateToProps, mapDispatchToProps)(Sell);
export default wrappedConnect;