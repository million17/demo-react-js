import * as constants from './../commons/constants';
import callApi from '../utils/apiCall';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('/api/get/product', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: constants.FETCH_PRODUCTS,
        products
    }
}


//Delete 

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`/api/get/product/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: constants.DELETE_PRODUCT,
        id
    }
}

//ADD 

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('/api/get/product/', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data))
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type: constants.ADD_PRODUCT,
        product
    }
}

//Edit

export const actDetailProductRequest = (id) => {
    return dispatch => {
        return callApi(`/api/get/product/${id}`, 'GET', null).then(res => {
            dispatch(actDetailProduct(res.data));
        })
    }
}

export const actDetailProduct = (product) => {
    return {
        type: constants.DETAIL_PRODUCT,
        product
    }
}
