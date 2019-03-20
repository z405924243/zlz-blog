import { Layout, Menu, Icon, Card } from "antd";
import React from "react";
import { Switch, Route, Link, withRouter} from 'react-router-dom';

import Blog from './blog';
import Diary from './diary';
import WriteBlog from './writeBlog';
const { Header, Content, Sider } = Layout;

class SiderMenu extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  changeItem(key){
    // debugger
    const { history } = this.props;
    // const history = this.props.history;
    history.push(key);
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="6" onClick={() => this.changeItem('/writeBlog')}>
              <Icon type="edit" theme="outlined" />
                <span>写博客</span>
              </Menu.Item>
              <Menu.Item key="1" onClick={() => this.changeItem('/blog')}>
              <Icon type="book" theme="outlined" />
                <span>博客管理</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={() => this.changeItem('/diary')}>
              <Icon type="read" theme="outlined" />
                <span>日记管理</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={() => this.changeItem('/')}>
              <Icon type="link" theme="outlined" />
                <span>友链管理</span>
              </Menu.Item>
              <Menu.Item key="4" onClick={() => this.changeItem('/')}>
              <Icon type="profile" theme="outlined" />
                <span>留言/评论审核</span>
              </Menu.Item>
              <Menu.Item key="5" onClick={() => this.changeItem('/')}>
                <Icon type="user" />
                <span>个人中心</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "16px" }}>
              {/* <Card bordered={false}> */}
                  <Switch>
                  <Route path='/blog' component={Blog} />
                  <Route path='/diary' component={Diary} />
                  <Route path='/writeBlog' component={WriteBlog} />
                </Switch>
                
              {/* </Card> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(SiderMenu);