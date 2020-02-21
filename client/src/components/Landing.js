import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Card } from "antd";
import Explorer from "./explorer/Explorer";

const Landing = () => {
  return (
    <Grid style={{ width: "100%" }}>
      <Row style={{ height: "100%" }}>
        <Col
          xs={12}
          sm={2}
          md={2}
          lg={3}
          style={{ paddingLeft: 0, height: "100%" }}
        >
          <Explorer />
        </Col>

        <Col xs={12} sm={6} md={6} lg={6}>
          <Explorer />
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Explorer />
        </Col>
      </Row>
    </Grid>
  );
};

export default Landing;
