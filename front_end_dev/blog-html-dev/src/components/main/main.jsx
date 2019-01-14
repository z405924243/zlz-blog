import React from 'react';
import desk from './mainDesktop.scss';
import phone from './mainPhone.scss'
import { Redirect, Route, Switch } from "react-router-dom";

import RightInfo from './rightInfo.jsx';
import Home from './home.jsx';
import Diary from './diary.jsx';
import Links from './links.jsx';
import Message from './message.jsx';
import About from './about.jsx';
import Content from './articleContent.jsx';
 
export default class Main extends React.Component {
    // constructor (){}

    render() {
        return (<div className={`${desk.container} ${phone.container}`}>
            <section className={`${desk.content} ${phone.content}`}>
            <Switch>
                <Redirect exact from='/' to="/home"/>
                <Route path="/home" component={Home} />
                <Route path="/diary" component={Diary} />
                <Route path="/links" component={Links} />
                <Route path="/message" component={Message} />
                <Route path="/about" component={About} />
                <Route path="/article/:articleId" component={Content} />
            </Switch>
                
            </section>

            <section className={`${desk.info} ${phone.info}`}>
                <RightInfo datas={this.props.datas} />
            </section>
        </div>);
    }
}