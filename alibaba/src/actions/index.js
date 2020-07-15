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

