import React from 'react';
import Pagination from '../global/pagination.jsx';
import Article from './article.jsx';

import config from '../../config';
import axios from 'axios';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            pageNum: 1,
            lastPage: 10,
            data:[]
        }
    }

    pageChange = (pageNum) => {
        this.setState({ pageNum: pageNum });
        console.log(pageNum);
    }

    createList = () =>{
        const self = this;
        return self.state.data.map(blog=>
            <Article key={blog.id} datas={blog}/>
        );
    }

    componentWillMount() {
        const self = this;
        let params = {
            pageNum:2,
            pageSize:5
        };
        axios.post(config.requestUrl + '/blogs', params).then(res => {
            self.setState({data:res.data.value});
            self.createList();
        })
    }

    render() {
        return (<div>
            {this.createList()}
            <Pagination lastPage={this.state.lastPage} pageNum={this.state.pageNum} match={this.props.match} onPageChange={this.pageChange} />
        </div>);
    }
}