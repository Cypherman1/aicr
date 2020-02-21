import React, { Component } from "react";

import { connect } from "react-redux";
import { Layout, Icon, Avatar } from "antd";
import * as actions from "../../actions";
import logo from "../../assets/imgs/brightics_logo.png";
import aicr from "../../assets/imgs/aicr.png";
import "./Layout.scss";

const { Header } = Layout;

class AppHeader extends Component {
  renderContent = auth => {
    switch (auth) {
      case false:
        return (
          <div style={{ float: "right" }}>
            <a href="/auth/google"> Login </a>
          </div>
        );
      case null:
        return <div style={{ float: "right" }}>loging in ...</div>;
      default:
        return (
          <div style={{ float: "right" }}>
            <Avatar style={{ marginRight: 5 }} src={auth.avatar} />
            <a href="/api/logout"> logout </a>
          </div>
        );
    }
  };
  render() {
    const { common, toggleSider, auth } = this.props;
    return (
      <Header
        style={{
          background: "#101b58",
          padding: 0,
          paddingLeft: 10,
          paddingRight: 14
        }}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
          <img className="aicr-text" src={aicr} alt="aicr" />
          {this.renderContent(auth)}
        </div>
      </Header>
    );
  }
}

const mapStateToProps = ({ auth, common }) => {
  return { auth, common };
};

export default connect(mapStateToProps, actions)(AppHeader);
