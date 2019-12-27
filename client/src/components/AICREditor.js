import React, { Component } from "react";
import { message, Button } from "antd";

const success = () => {
  message.success(
    "This is a prompt message for success, and it will disappear in 10 seconds",
    10
  );
};

class AICREditor extends Component {
  render() {
    return [
      <h2> AICR Editor </h2>,
      <Button onClick={success} type="primary">
        Primary
      </Button>
    ];
  }
}

export default AICREditor;
