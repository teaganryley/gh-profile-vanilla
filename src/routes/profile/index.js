/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import User from 'components/user';
import userMock from 'mocks/user-mock.json';

/*
const StyledContainer = styled(Container)`
  background: ${({ theme }) => theme.colors.background};
`;
*/

const Profile = () => (
  <Row
    nogutter
    style={{
      height: '100vh',
    }}
  >
    <Col xs={3} style={{ background: '#3B4252' }}>
      <Row
        debug
        align="center"
        justify="around"
        direction="column"
        style={{ minHeight: "100%" }}
        gutterWidth={16}
      >
        <Col xs={6} debug>Col 1</Col>
        <Col xs={6} debug>Col 2</Col>
        <Col xs={6} debug>Col 3</Col>
        <Col xs={6} debug>Col 4</Col>
      </Row>
    </Col>
    <Col xs={9}>
      repo list goes here
    </Col>
  </Row>
);

export default Profile;
