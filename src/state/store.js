import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer, 
    window.devToolsExtension ? window.devToolsExtension() : f => f
)
export default store;
