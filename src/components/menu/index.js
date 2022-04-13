import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import StyledIcon from 'components/icon';
import Text from 'components/text';
import {
  follower,
  heart,
  // bird,
  // link,
  // location,
  // mail,
  // org,
  star,
} from 'assets/icons';

const Avatar = styled.img`
  height: 298px;
  width: 298px;
  border: 2px solid #C0CCDA;
`;

const Menu = ({ user }) => (
  <Row
    align="center"
    justify="around"
    direction="column"
    style={{ minHeight: '100%' }}
    // gutterWidth={16}
  >
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
    <Col xs={12}>
      <Row align="center" justify="between" direction="row">
        <Col xs={4}>
          <StyledIcon src={follower} />
        </Col>
        <Col xs={4}>
          <StyledIcon src={heart} />
        </Col>
        <Col xs={4}>
          <StyledIcon src={star} />
        </Col>
      </Row>
    </Col>
  </Row>
);

Menu.propTypes = {
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

export default Menu;
