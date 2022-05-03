import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import Menu from 'components/menu';
import RepoCard from 'components/repo-card';
import api from 'services/api';

/*
  - Implement 404 redirect on main
  - refactor GET request placement and data flow
  - Implement pagination
  - Implement loading indicators
*/
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
  const [repoList, setRepoList] = useState([]);
  const [starCount, setStarCount] = useState(0);
  const [userData, setUserData] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    api.get(`/users/${userId}/user`)
      .then(({ data }) => setUserData(data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api.get(`/users/${userId}/repos?per_page=10`)
      .then(({ data }) => {
        setRepoList(data.sort((a, b) => a.stargazers_count - b.stargazers_count));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api.get(`/users/${userId}/starred`)
      .then(({ data }) => {
        setStarCount(data.length);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper nogutter>
      <MenuCol xs={3}>
        <Menu {...userData} starCount={starCount} />
      </MenuCol>
      <RepoCol xs={9} style={{ padding: '2.5% 5%' }}>
        {repoList.map(repo => <RepoCard key={repo.id} {...repo} />)}
      </RepoCol>
    </Wrapper>
  );
};

export default Profile;
