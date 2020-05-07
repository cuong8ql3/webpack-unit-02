import * as Types from './../Constants/ActionType';

const defaultState = [];

const ItemEditing = (state = defaultState, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCTS:
            return action.product;

        default: return state;
    }
}

export default ItemEditing;