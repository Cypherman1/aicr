import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "../assets/css/main.css";

const Dashboard = () => {
  return <h2> Dashboard </h2>;
};

const Meseros = () => {
  return <h2> Meseros </h2>;
};

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width="160"
            theme="light"
          >
            <div className="logo" />
            <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Dashboard</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Meseros</span>
                <Link to="/meseros" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{ background: "#101b58", padding: 0, paddingLeft: 16 }}
            >
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                style={{ cursor: "pointer", color: "white" }}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Route exact path="/" component={Dashboard} />
              <Route path="/meseros" component={Meseros} />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
