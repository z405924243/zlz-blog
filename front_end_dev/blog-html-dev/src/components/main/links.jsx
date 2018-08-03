import React from 'react';
import style from './links.scss';

import config from '../../config';
import axios from 'axios';

export default class Links extends React.Component {
    constructor (){
        super();
        this.state= {
            linkList:[]
        }
    }

    creatLinks = ()=>{
        const list = this.state.linkList;
        return list.map(item =>
            <div>
                <h5>{item.name}</h5>
                <p>{item.info}</p>
            </div>
        )
    }

    componentWillMount () {
        const self = this;
        axios.get(config.requestUrl + '/links').then(res => {
            console.log(res)
            self.setState({linkList:res.data.value})
        })
    }

    render() {
        return (
            <div className={style.links}>
                <h4>这是友链哦</h4>
                <div>
                    {this.creatLinks()}
                </div>
            </div>);
    }
}