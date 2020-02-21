import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { connect } from "react-redux";
import * as actions from "../actions";
import AppHeader from "../components/Layout/AppHeader";
import AppSideBar from "../components/Layout/AppSideBar";
import AppFooter from "../components/Layout/AppFooter";
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
            <AppSideBar />
            <Content
              style={{
                padding: "0",
                background: "#C0C0C0",
                minHeight: 280
              }}
            >
              <Route exact path="/" component={Landing} />
              <Route path="/ocreditor" component={AICREditor} />
              <Route path="/imgeditor" component={ImageEditor} />
            </Content>
          </Layout>
          <AppFooter />
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = ({ common }) => {
  return { common };
};

export default connect(mapStateToProps, actions)(App);
