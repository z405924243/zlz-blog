import React from 'react';
import style from './article.scss';
import icon from '../global/icon.scss';
import { Link } from "react-router-dom";

import config from '../../config';
import axios from 'axios';

export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }

    createList = () =>{
        const self = this;
        return (self.state.data || self.props.data).map(data=>
            (<article>
                <h4 className={style.title}><Link to={`/article/${data.id}`}>{data.title}</Link></h4>
                <p className={style.info}>
                    <span className={`${icon.iconfont} ${icon['icon-time-circle']}`}>{data.time}</span>
                    <span className={`${icon.iconfont} ${icon['icon-eye']}`}>浏览：{data.browse}</span>
                    <span className={`${icon.iconfont} ${icon['icon-heart']}`}>喜欢：{data.like}</span>
                    <span className={`${icon.iconfont} ${icon['icon-edit-square']}`}>评论：0</span>
                </p>
                <p>{data.content}</p>
        
        <p className={style.tool}></p>
        </article>)
        );
    }

    componentWillMount () {
        const self = this;
        let params = {
            pageNum: (self.props.match&&self.props.match.params.pageNum) || 1,
            pageSize:5
        };
        axios.post(config.requestUrl + '/blogs', params).then(res => {
            self.setState({data:res.data.value});
            self.createList();
        })
    }

    componentWillReceiveProps (nextProps) {
        console.log('fresh')
        const self = this;
        let params = {
            pageNum: (nextProps.match&&nextProps.match.params.pageNum) || 1,
            pageSize:5
        };
        axios.post(config.requestUrl + '/blogs', params).then(res => {
            self.setState({data:res.data.value});
            self.createList();
        })
    }

    render() {
        return (
            <div>
              {this.createList()}  
            </div>
        )
    }
}