import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { connect } from "react-redux";
import * as actions from "../actions";
import AppHeader from "./AppHeader";
import AICREditor from "./AICREditor";
import ImageEditor from "./ImageEditor";
import Landing from "./Landing";
import "../assets/css/main.css";

const { Content, Footer, Sider } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { common, setSiderCollapsed } = this.props;
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <AppHeader />

          <Layout>
            <Sider collapsed theme="light" collapsedWidth={50}>
              <Menu defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1">
                  <Icon type="home" />
                  <span>Home</span>
                  <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="solution" />
                  <span>AICR Editor</span>
                  <Link to="/ocreditor" />
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="file-image" />
                  <span>Image Editor</span>
                  <Link to="/imgeditor" />
                </Menu.Item>
              </Menu>
            </Sider>
            <Content
              style={{
                margin: "5px 5px 0 5px",
                padding: 2,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Route exact path="/" component={Landing} />
              <Route path="/ocreditor" component={AICREditor} />
              <Route path="/imgeditor" component={ImageEditor} />
            </Content>
          </Layout>
          <Footer style={{ textAlign: "center" }}>
            Brightics AICR ©2019 Created by SDSRV
          </Footer>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = ({ common }) => {
  return { common };
};

export default connect(mapStateToProps, actions)(App);
