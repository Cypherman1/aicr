import React, { Component } from "react";

import { connect } from "react-redux";
import { Layout, Icon, Avatar } from "antd";
import * as actions from "../actions";
const { Header } = Layout;

class AppHeader extends Component {
  renderContent = () => {
    switch (this.props.auth) {
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
            <Avatar style={{ marginRight: 5 }} icon="user" />
            <a href="/api/logout"> logout </a>
          </div>
        );
    }
  };
  render() {
    const { common, toggleSider } = this.props;
    return (
      <Header
        style={{
          background: "#101b58",
          padding: 0,
          paddingLeft: 16,
          paddingRight: 16
        }}
      >
        <Icon
          className="trigger"
          type={common.sider_collapsed ? "menu-unfold" : "menu-fold"}
          style={{ cursor: "pointer", color: "white" }}
          onClick={toggleSider}
        />
        {this.renderContent()}
      </Header>
    );
  }
}

const mapStateToProps = ({ auth, common }) => {
  return { auth, common };
};

export default connect(mapStateToProps, actions)(AppHeader);
