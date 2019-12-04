import React from "react";
import employeeListStyles from '../../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import WaveItem from './WaveItem';

const WaveList = ({ wave, setID }) => {
    return (
        <div>
            <Container className={employeeListStyles.container}>
                <Col >
                    <Row className={employeeListStyles.title}>
                        <h3>Incoming Inventory</h3>
                    </Row>
                    <Row className={employeeListStyles.header}>
                        <Col md="3">
                            <h4>ID</h4>
                        </Col>
                        <Col md="9">
                            <h4>Employee ID</h4>
                        </Col>
                    </Row>
                    {wave.map(wave => (<WaveItem wave={wave} setID={setID} />))}
                </Col>
            </Container>
        </div>
    )
}

export default WaveList;
