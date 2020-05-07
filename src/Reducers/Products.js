import * as Types from './../Constants/ActionType';

const initialState = [];

const products = (state = initialState, action) => {
    switch(action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state]

        case Types.DELETE_PRODUCTS:            
            // state = state.filter(ex => ex.id !== action.id)
            // return [...state]
            return state.filter(ex => ex.id !== action.id)

        case Types.ADD_PRODUCTS:
            state.push(action.product)
            return [...state]
            
        case Types.UPDATE_PRODUCTS:
            const index = state.filter(ex => ex.id === action.product.id).index
            state[index] = action.product
            return [...state]

        default: return [...state]
    }
}

export default products;