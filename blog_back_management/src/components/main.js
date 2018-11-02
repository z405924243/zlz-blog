import { Layout, Menu, Icon, Card } from "antd";
import React from "react";

const { Header, Content, Sider } = Layout;

export default class SiderMenu extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

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
              <Menu.Item key="1">
              <Icon type="form" theme="outlined" />
                <span>写博客</span>
              </Menu.Item>
              <Menu.Item key="2">
              <Icon type="message" theme="outlined" />
                <span>写日记</span>
              </Menu.Item>
              <Menu.Item key="3">
              <Icon type="link" theme="outlined" />
                <span>友链管理</span>
              </Menu.Item>
              <Menu.Item key="4">
              <Icon type="profile" theme="outlined" />
                <span>留言/评论审核</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="user" />
                <span>个人中心</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "16px" }}>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
              </Breadcrumb> */}
              <Card bordered={false}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
