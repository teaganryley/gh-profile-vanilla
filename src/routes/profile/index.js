import React from 'react';
import {
  // Container,
  Row,
  Col,
} from 'react-grid-system';
import Typography from 'components/typography';
// import Menu from 'components/menu';
// import userMock from 'mocks/user-mock.json';

const Profile = () => (
  <Row nogutter style={{ height: '100vh' }}>
    <Col xs={3} style={{ background: '#3B4252' }}>
      <Typography size="l" color="secondary">
        Testing typography
      </Typography>
    </Col>
    <Col xs={9}>
      repo list goes here
    </Col>
  </Row>
);

export default Profile;
