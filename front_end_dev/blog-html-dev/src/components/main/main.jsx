import React from 'react';
import desk from './mainDesktop.scss';
import phone from './mainPhone.scss'
import icon from '../global/icon.scss';

export default class Main extends React.Component {
    // constructor (){}

    render() {
        return (<div className={`${desk.container} ${phone.container}`}>
            <section className={`${desk.content} ${phone.content}`}>
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
                
            </section>

            <section className={`${desk.info} ${phone.info}`}>
                <div>
                    123456
                </div>
                
            </section>
        </div>);
    }
}