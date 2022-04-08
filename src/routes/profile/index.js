import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import UserProfile from 'components/user-profile';
import userMock from 'mocks/user-mock.json';

const Profile = () => (
  <Container fluid>
    <Row debug>
      <Col xs={12} debug>
        <Row>
          <Col xs={3} debug>
            user profile goes here
            <UserProfile user={userMock} />
          </Col>
          <Col xs={9} debug>
            repo list goes here
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Profile;
