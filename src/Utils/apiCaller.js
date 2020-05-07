import Axios from 'axios';
import * as Config from '../Constants/Config';

export default function calllApi(endpoint, method = "GET", body) {
    return Axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body    
    }).catch (err => {
        console.log(err)
    })
};