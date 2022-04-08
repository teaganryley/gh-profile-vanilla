import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import Text from 'components/text';
// style={{ height: '300px' }}

// test text props, defaults

const StyledRow = styled(Row)`
  background: ${({ theme }) => theme.colors.secondary};
`;

const UserProfile = ({ user }) => (
  <StyledRow align="center" justify="center" direction="row" debug>
    <Col xs={12}>
      <img src={user.avatar_url} alt="user avatar" />
    </Col>
    <Col xs={12}>
      <Text>{`@${user.login}`}</Text>
    </Col>
    <Col xs={12} />
  </StyledRow>
);

UserProfile.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    bio: PropTypes.string,
    followers: PropTypes.string,
    following: PropTypes.string,
    // starred_url?
    company: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    blog: PropTypes.string,
    twitter_username: PropTypes.string,
  }),
};

export default UserProfile;
