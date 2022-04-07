import React from 'react';
// import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

const UserProfile = () => (
  <Row align="center" justify="center" direction="row" style={{ height: '300px' }} debug>
    <Col xs={3} debug>1 of 3</Col>
    <Col xs={3} debug>2 of 3</Col>
    <Col xs={3} debug>3 of 3</Col>
  </Row>
);

export default UserProfile;
