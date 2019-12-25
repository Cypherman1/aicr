import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "../assets/css/main.css";

import logo from "../assets/imgs/brightics_logo.png";
import aicr from "../assets/imgs/aicr.png";

const Home = () => {
  return <h2> Home </h2>;
};

const Editor = () => {
  return <h2> AICR Editor </h2>;
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
            <div className="logo">
              <img src={logo} alt="logo" />
              <img
                className={this.state.collapsed ? "nodisplay" : "aicr-text"}
                src={aicr}
                alt="aicr"
              />
            </div>
            <Menu defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Home</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>AICR Editor</span>
                <Link to="/editor" />
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
              <Route exact path="/" component={Home} />
              <Route path="/editor" component={Editor} />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Brightics AICR ©2019 Created by SDSRV
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
