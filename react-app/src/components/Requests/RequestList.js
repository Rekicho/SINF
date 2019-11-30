import React from "react";
import orderListStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RequestItem from './RequestItem';

const OrderList = ({ requests, setID }) => {
    return (
        <div>
            <Container className={orderListStyles.container}>
                <Col >
                    <Row className={orderListStyles.title}>
                        <h3>Orders</h3>
                    </Row>
                    <Row className={orderListStyles.header2}>
                        <Col md="1">
                            <h4>ID</h4>
                        </Col>
                    </Row>
                    {requests.map(request => (<RequestItem request={request} setID={setID} />))}
                </Col>
            </Container>
        </div>
    )
}

export default OrderList;

