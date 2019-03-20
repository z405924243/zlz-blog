import React from 'react';
import {Card} from 'antd';
import axios from 'axios';
import withHttp from './fuction/http';

import { Table, Divider, Tag, Modal } from 'antd';

const { confirm } = Modal;

 class Blog extends React.Component {
    state = {
        data: [],
        pagination: {},
      }

      columns = [{
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
            <a href="javascript:;" style={{color: "blue"}} onClick={()=> this.onlineConfirm(text.id, Number(text.online) ? 0 : 1)}>{state}</a>
            <Divider type="vertical" />
            <a href="javascript:;" style={{color: "blue"}}>编辑</a>
            <Divider type="vertical" />
            <a href="javascript:;" style={{color: "blue"}}>评论</a>
            <Divider type="vertical" />
            <a href="javascript:;" style={{color: "blue"}} onClick={()=> this.showDeleteConfirm(text.id)}>删除</a>
          </span>
        )},
      }];
      onlineConfirm (id, state) {
        const self = this;
        confirm({
          title: '更改博客状态',
          content: state ? '确认上线该博客?' : '确认下线该博客?',
          okText: '确定',
          // okType: 'danger',
          cancelText: '取消',
          onOk() {
            self.props.http.get(`onlineStateChange?id=${id}&state=${Number(state)}`).then((res)=>{
              self.fetch({
                pageNum:1,
                pageSize:10
              });
            })
          }
        });
      }
      showDeleteConfirm(id) {
        const self = this;
        confirm({
          title: '删除博客',
          content: '确认删除该博客?',
          okText: '确定',
          okType: 'danger',
          cancelText: '取消',
          onOk() {
            
            self.props.http.get(`deleteBlog?id=${id}`).then((res)=>{
              self.fetch({
                pageNum:1,
                pageSize:10
              });
            })
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
          pagination: pager,
        });
        this.fetch({
          pageSize: pagination.pageSize,
          pageNum: pagination.current
        });
      }
    
      fetch = (params = {}) => {
        this.props.http.post('getAllBlog', params).then((data) => {
          const pagination = { ...this.state.pagination };
          pagination.total = data.total;
          this.setState({
            data: data.value,
            pagination,
          });
        });
      }

      componentWillMount(){
        this.fetch({
          pageNum:1,
          pageSize:10
        });
      }

    render(){
        return (<div>
            <Card>
                <Table columns={this.columns} dataSource={this.state.data} pagination={this.state.pagination} onChange={this.handleTableChange}/>
            </Card>
        </div>)
    }
}

export default withHttp(Blog);