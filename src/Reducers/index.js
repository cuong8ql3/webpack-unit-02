import { combineReducers } from 'redux';

import products from './Products';
import ItemEditing from './ItemEditing';

const appReducers = combineReducers({
    products,
    ItemEditing
})

export default appReducers;