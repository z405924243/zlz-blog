import React from 'react';
import {Card} from 'antd';
import withHttp from './fuction/http';

import { Table, Divider, Tag, Modal } from 'antd';

const { confirm } = Modal;

class LinksMenager extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[],
            pagination:{}
        }
        this.columns=[{
            title: 'BlogId',
            dataIndex: 'id',
            key: 'id'
          }, {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
          }, {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
          },{
            title: 'Browse',
            dataIndex: 'browse',
            key: 'browse',
          },{
            title: 'Like',
            dataIndex: 'like',
            key: 'like',
          }, {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            // render: tags => (
            //   <span>
            //     {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
            //   </span>
            // ),
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
              let state = text.online ? '下线' : '上线';
              return (
              <span>
                <a href="javascript:;" style={{color: "blue"}} onClick={()=> this.onlineConfirm()}>添加</a>
                <Divider type="vertical" />
                <a href="javascript:;" style={{color: "blue"}}>编辑</a>
                <Divider type="vertical" />
                <a href="javascript:;" style={{color: "blue"}} onClick={()=> this.showDeleteConfirm(text.id)}>删除</a>
              </span>
            )},
          }];

    }

    componentWillMount(){

    }

    render(){
        return (<div>
            <Card>
                <Table columns={this.columns} dataSource={this.state.data} pagination={this.state.pagination} onChange={this.handleTableChange}/>
            </Card>
        </div>)
    }
}

export default withHttp(LinksMenager);