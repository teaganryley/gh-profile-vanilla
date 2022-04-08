import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import Text from 'components/text';
// style={{ height: '300px' }}

// test text props, defaults
// ${({ theme }) => theme.colors.secondary}
const ProfileWrapper = styled.div`
  background: #3B4252;
`;

const Avatar = styled.img`
  height: 298px;
  width: 298px;
  border: 2px solid #C0CCDA;
`;

// is theme in props? can i destructure?
const User = ({ user }) => (
  <ProfileWrapper>
    <Container fluid>
      <Row align="center" justify="center" direction="row">
        <Col xs={12}>
          <Avatar src={user.avatar_url} alt="user avatar" />
        </Col>
        <Col xs={12}>
          <Text
            fontSize="40px"
            fontStyle="italic"
            lineHeight="50px"
          >
            {user.name}
          </Text>
        </Col>
        <Col xs={12}>
          <Text
            fontSize="28px"
            fontStyle="italic"
            lineHeight="34px"
          >
            {`@${user.login}`}
          </Text>
        </Col>
        <Col xs={12}>
          <Text
            color="#8190A5"
            fontSize="18px"
            lineHeight="28px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed tincidunt congue ligula in rutrum. Morbi nec lacus
            condimentum, hendrerit mi eu, feugiat.
          </Text>
        </Col>
        <Row>
          <Col xs={4}>1</Col>
          <Col xs={4}>2</Col>
          <Col xs={4}>3</Col>
        </Row>
      </Row>
    </Container>
  </ProfileWrapper>
);

User.propTypes = {
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

export default User;
