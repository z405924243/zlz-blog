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

    goLink(url) {
        window.open(url);
    }

    creatLinks = ()=>{
        const list = this.state.linkList;
        return list.map(item =>
            <div className={style.friendCard} onClick={() => this.goLink(item.url)}>
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
                <h4 style={{fontSize: '16px'}}>友链s</h4>
                <div className={style.cardBox}>
                    {this.creatLinks()}
                </div>
            </div>);
    }
}