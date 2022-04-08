/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import User from 'components/user';
import userMock from 'mocks/user-mock.json';

const StyledContainer = styled(Container)`
  background: ${({ theme }) => theme.colors.background};
`;

const Profile = () => (
  <Row nogutter>
    <Col xs={3}>
      <User user={userMock} />
    </Col>
    <Col xs={9}>
      repo list goes here
    </Col>
  </Row>
);

export default Profile;
