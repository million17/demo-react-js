import axios from 'axios';


import * as constants from './../commons/constants';

export default function callApi(endponit, method = 'GET', body) {

    return axios({
        method: method,
        url: `${constants.API_URL}/${endponit}`,
        data : body
    }).catch(err => {
        console.log(err)
    });

}