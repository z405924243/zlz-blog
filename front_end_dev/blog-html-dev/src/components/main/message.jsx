import React from 'react';
import style from './message.scss';
import MessageBoard from '../global/messageBoard.jsx';

export default class Message extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <div className={style.title}>
                    <h1>留言板</h1>
                    <h5>不说点什么吗？~</h5>
                </div>

                <MessageBoard />
            </div>);
    }
}