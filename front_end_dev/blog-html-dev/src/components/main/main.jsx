import React from 'react';
import desk from './mainDesktop.scss';
import phone from './mainPhone.scss'
<<<<<<< HEAD
import icon from '../global/icon.scss';

=======
import { Redirect, Route  } from "react-router-dom";

import RightInfo from './rightInfo.jsx';
import Home from './home.jsx';
import Diary from './diary.jsx';
import Links from './links.jsx';
import Message from './message.jsx';
import About from './about.jsx';
import Content from './articleContent.jsx';
 
>>>>>>> dev
export default class Main extends React.Component {
    // constructor (){}

    render() {
        return (<div className={`${desk.container} ${phone.container}`}>
            <section className={`${desk.content} ${phone.content}`}>
<<<<<<< HEAD
                <article>
                    <h4>biaoti</h4>
                    <p>你喜欢什么呢</p>
                    <p>你喜欢什么呢</p>
                    <p>你喜欢什么呢</p>
                </article>

                 <article>
                    <h4>biaoti</h4>
                    <p>你喜欢什么呢</p>
                    <p>你喜欢什么呢</p>
                </article>

                 <article>
                    <h4>biaoti</h4>
                    <p>你喜欢什么呢</p>
                    <p>你喜欢什么呢</p>
                    <p>你喜欢什么呢</p>
                </article>

                 <article>
                    <h4>biaoti</h4>
                    <p>你喜欢什么呢</p>
                    <p>你喜欢什么呢</p>
                    <p>你喜欢什么呢</p>
                </article>
=======
                <Route exact path="/">
                    {/* <Redirect exact from='/' to="/home"/> */}
                </Route>
            
                <Route path="/home" component={Home} />
                <Route path="/diary" component={Diary} />
                <Route path="/links" component={Links} />
                <Route path="/message" component={Message} />
                <Route path="/about" component={About} />
                <Route path="/article/:articleId" component={Content} />
>>>>>>> dev
                
            </section>

            <section className={`${desk.info} ${phone.info}`}>
<<<<<<< HEAD
                <div>
                    123456
                </div>
                
=======
                <RightInfo datas={this.props.datas} />
>>>>>>> dev
            </section>
        </div>);
    }
}