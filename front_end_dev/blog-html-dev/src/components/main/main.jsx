import React from 'react';
import desk from './mainDesktop.scss';
import phone from './mainPhone.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RightInfo from './rightInfo.jsx';
import Home from './home.jsx';
import About from './about.jsx';

export default class Main extends React.Component {
    // constructor (){}

    render() {
        return (<div className={`${desk.container} ${phone.container}`}>
            <section className={`${desk.content} ${phone.content}`}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </section>

            <section className={`${desk.info} ${phone.info}`}>
                <RightInfo />
            </section>
        </div>);
    }
}