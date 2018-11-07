import React from 'react';
import { Card } from "antd";


export default class Diary extends React.Component {
    state = {}

    render(){
        return (<div>
            <Card bordered={false}>
                <p>Card 111</p>
                <p>Card 2222</p>
                <p>Card 333</p>
            </Card>
        </div>)
    }
}