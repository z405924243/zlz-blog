import axios from 'axios';
import React from "react";
import { apiUrl } from '../../config';

// axios.defaults.baseURL = apiUrl;
axios.defaults.timeout = 10000;

const http = {};
http.get = function (url, params, showLoading = true){
    return new Promise(function(resolve,reject){
        axios({
            url,
            method: 'get',
            data: params,
            baseURL: url.indexOf('http') === 0 ? '' : apiUrl
        }).then(res=>{
            resolve(res.data);
        })
    })
}

http.post = function (url, params, showLoading = true){
    return new Promise(function(resolve,reject){
        axios({
            url,
            method: 'post',
            data: params,
            baseURL: url.indexOf('http') === 0 ? '' : apiUrl
        }).then(res=>{
            resolve(res.data);
        })
    })
}

export default function withHttp (WrappedComponent){
    return class extends React.Component{
        render() {
            return <WrappedComponent http={http}></WrappedComponent>
        }
    }
}