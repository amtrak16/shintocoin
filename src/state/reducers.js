import {
    MINECOIN,
    SELLCOINS,
    BUYCOINS
} from './actions'

class Transaction {
    constructor(
        type,
        amount,
        value
    ) {
        this.type = type;
        this.amount = amount;
        this.value = value;
        this.id = genId(type);
    }
}

const genId = (type) => {
    let rand = Math.random().toString(36).substr(2, 9);
    return type.replace(/ /g, '') + rand;
  }

const initialState = {
    transactions: [],
    curValue: 1,
    curAmount: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case MINECOIN:
            return { ...state, transactions: state.transactions.concat(new Transaction('Mine', 1 ,state.curValue+1)) , curValue:state.curValue+1, curAmount:state.curAmount+1}
        case SELLCOINS:
            return { ...state, transactions: state.transactions.concat(new Transaction('Sell', action.payload, state.curValue - action.payload)), curValue: state.curValue - action.payload, curAmount: state.curAmount - action.payload }
        case BUYCOINS:
            return { ...state, transactions: state.transactions.concat(new Transaction('Buy', action.payload, state.curValue + action.payload)), curValue: state.curValue + action.payload, curAmount: state.curAmount + action.payload }
        default:
            return state;
    }
}

export default reducer;