import React from 'react';
import Pagination from '../global/pagination.jsx';
import Article from './article.jsx';

import {Route } from "react-router-dom";
import config from '../../config';
import axios from 'axios';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state={
            pageNum:1,
            lastPage:1
        }
    }

    componentWillMount () {
        const self = this;
        let params = {
            pageNum:1,
            pageSize:5
        };
        axios.post(config.requestUrl + '/blogs', params).then(res => {
            self.setState({lastPage:res.data.lastPage})
        })
    }

    render() {
        console.log(this.props.match)
        return (<div>
            <Route exact path={`${this.props.match.url}`} component={Article} />
            <Route path={`${this.props.match.url}/page/:pageNum`} component={Article} />
            
            <Pagination match={this.props.match} pageNum={this.state.pageNum} lastPage={this.state.lastPage} />
        </div>);
    }
}