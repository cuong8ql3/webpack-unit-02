import * as Types from './../Constants/ActionType';
import callApi from './../Utils/apiCaller';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res =>{
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = id => dispatch => {    
    return callApi(`products/${id}`, 'DELETE', null).then(res => {
        if (res.status === 200) {
            dispatch(actDeleteProduct(id))
        }
    })    
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
}

export const actAddProductRequest = product => dispatch => {
    return callApi('products', 'POST', product).then(res => {
        dispatch(actAddProduct(res.data))
    })
}

export const actAddProduct = product => {
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}

export const actGetProductRequest = id => dispatch => {
    return callApi(`products/${id}`, 'GET', null).then(res => {
        dispatch(actGetProduct(res.data))
    })
}

export const actGetProduct = product => {
    return {
        type: Types.EDIT_PRODUCTS,
        product
    }
}

export const actUpdateProductRequest = product => dispatch => {
    return callApi(`products/${product.id}`, 'PUT', product).then(res => {
        dispatch(actUpdateProduct(res.data))
    })
}

export const actUpdateProduct = product => {
    return {
        type: Types.UPDATE_PRODUCTS,
        product
    }
}

