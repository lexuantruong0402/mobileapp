import axios from 'axios';
// You Can Also Use Environement Varible
export const apiRoot= 'http://192.168.1.106:6969';
export const client = axios.create({
    baseURL: apiRoot,
    timeout: 60000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        "X-Custom-Header": "foobar",
        'Company-Key': 'cpn1'
    },
});

