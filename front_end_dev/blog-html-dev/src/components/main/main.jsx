import React from 'react';
import desk from './mainDesktop.scss';
import phone from './mainPhone.scss'
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";

import RightInfo from './rightInfo.jsx';
import Home from './home.jsx';
import Links from './links.jsx';
import About from './about.jsx';
import Content from './articleContent.jsx';
import Article from './article.jsx';

export default class Main extends React.Component {
    // constructor (){}

    render() {
        return (<div className={`${desk.container} ${phone.container}`}>
            <section className={`${desk.content} ${phone.content}`}>
                <Route path="/home" component={Home} />
                <Route path="/links" component={Links} />
                <Route path="/message" component={About} />
                <Route path="/about" component={About} />
                <Route path="/article/:articleId" component={Content} />
                
            </section>

            <section className={`${desk.info} ${phone.info}`}>
                <RightInfo datas={this.props.datas} />
            </section>
        </div>);
    }
}