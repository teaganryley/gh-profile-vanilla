import React from 'react';
import { Row, Col } from 'react-grid-system';
import Menu from 'components/menu';
import RepoCard from 'components/repo-card';
import userMock from 'mocks/user-mock.json';
import repoList from 'mocks/repo-mock.json';

// consider pagination

const Profile = () => {
  console.log('test');

  return (
    <Row nogutter style={{ height: '100vh' }}>
      <Col xs={3} style={{ background: '#3B4252' }}>
        <Menu {...userMock} />
      </Col>
      <Col xs={9} style={{ padding: '2.5% 5%' }}>
        {repoList.map(repo => <RepoCard key={repo.id} {...repo} />)}
      </Col>
    </Row>
  );
};

export default Profile;
