import React, { useState } from "react";
import clientItemStyles from "../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OrderItem = ({ item }) => (
  <Row className={clientItemStyles.senderItem}>
    <Col md="2">
      <h5 className={clientItemStyles.text}>{item.id}</h5>
    </Col>
    <Col md="8">
      <h5 className={clientItemStyles.text}>{item.name}</h5>
    </Col>
    <Col md="2">
      <h5 className={clientItemStyles.text}>{item.quantity}</h5>
    </Col>
  </Row>
);

export default OrderItem;
