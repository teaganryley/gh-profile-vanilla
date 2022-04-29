import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import Menu from 'components/menu';
import RepoCard from 'components/repo-card';
import userMock from 'mocks/user-mock.json';
import repoList from 'mocks/repo-mock.json';

// consider pagination
const Wrapper = styled(Row)`
  height: 100vh;
`;

const MenuCol = styled(Col)`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const RepoCol = styled(Col)`
  background-color: ${({ theme }) => theme.colors.background};
`;

const Profile = () => {
  console.log('test');

  return (
    <Wrapper nogutter>
      <MenuCol xs={3}>
        <Menu {...userMock} />
      </MenuCol>
      <RepoCol xs={9} style={{ padding: '2.5% 5%' }}>
        {repoList.map(repo => <RepoCard key={repo.id} {...repo} />)}
      </RepoCol>
    </Wrapper>
  );
};

export default Profile;
