import React from 'react';
import style from './about.scss';
import mk from '../../styleInit.css';

import marked from 'marked';
import config from '../../config';
import axios from 'axios';

export default class About extends React.Component {
    constructor (){
        super();
        this.state={
            data:''
        }
    }

    setHtml(){
        let content = marked(this.state.data||'');
        return {__html:content };
    }

    componentWillMount () {
        const self = this;
        axios.get(config.requestUrl + '/getAbout').then(res => {
            self.setState({data:res.data.value});
        })
    }

    render() {
        return (
        <div>
            <div className={style.about + ' ' + mk['markdown-body']} dangerouslySetInnerHTML={this.setHtml()}></div>
        </div>);
    }
}