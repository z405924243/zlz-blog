import React from 'react';
import {Card, Button} from 'antd';
import axios from 'axios';

import { Input, Table, Divider, Tag, Modal } from 'antd';

const { confirm } = Modal;

export default class WriteBlog extends React.Component {
    state = {
        data: [],
        pagination: {},
      }

    render(){
        return (<div>
            <Card>
                <p>
                    <h5>博客标题：</h5>
                <Input placeholder="不超过120字" />
                </p>
                <div>
                    <h5>标签选择：</h5>

                </div>
                <div>
                    <h5>博客正文：</h5>

                </div>
                <div>
                    <Button type="primary">发布</Button>
                    <Button>返回</Button>
                </div>
            </Card>
        </div>)
    }
}