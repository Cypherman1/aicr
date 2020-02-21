import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;

const AppSideBar = () => {
  return (
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
  );
};

export default AppSideBar;
