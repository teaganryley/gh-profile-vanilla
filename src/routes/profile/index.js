import React from 'react';
import { Row, Col } from 'react-grid-system';
import Menu from 'components/menu';
import RepoCard from 'components/repo-card';
import userMock from 'mocks/user-mock.json';

/*
  TODO:
  1) mock repo list
  2) RepoCard data flow with mock
*/
const Profile = () => {
  console.log('myList');

  return (
    <Row nogutter style={{ height: '100vh' }}>
      <Col xs={3} style={{ background: '#3B4252' }}>
        <Menu {...userMock} />
      </Col>
      <Col xs={9} style={{ padding: '2.5% 5%' }}>
        <RepoCard />
      </Col>
    </Row>
  );
};

export default Profile;
