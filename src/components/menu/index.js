import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import StyledIcon from 'components/icon';
import Typography from 'components/typography';
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

// re-style columns with custom component
// styled-icon gets color props from theme provider?
// stack component?

const Avatar = styled.img`
  display: block;
  width: 100%;
  margin: auto
`;

const Menu = ({ user }) => (
  <Row
    align="center"
    justify="start"
    direction="column"
    style={{ minHeight: '100%', margin: '0' }}
  >
    <Col xs={12} style={{ padding: '10% 10% 5%', width: '90%' }}>
      <Avatar src={user.avatar_url} alt="user avatar" />
    </Col>
    <Col xs={12}>
      <Typography color="accent" size="xl" fontStyle="italic">
        {user.name}
      </Typography>
    </Col>
    <Col xs={12}>
      <Typography color="accent" size="l" fontStyle="italic">
        {`@${user.login}`}
      </Typography>
    </Col>
    <Col xs={12}>
      <Typography color="muted" size="xs" fontStyle="italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed tincidunt congue ligula in rutrum. Morbi nec lacus
        condimentum, hendrerit mi eu, feugiat.
      </Typography>
    </Col>
    <Col xs={12}>
      <Row align="center" justify="between" direction="row" nogutter>
        <Col
          xs={4}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <StyledIcon src={follower} color="#ECEFF4" />
          <Typography color="accent" size="s" fontStyle="italic">
            {user.followers}
            {' '}
            followers
          </Typography>
        </Col>
        <Col xs={4}>
          <Typography color="accent" size="s" fontStyle="italic">
            <StyledIcon src={heart} color="#ECEFF4" />
            {user.following}
            {' '}
            following
          </Typography>
        </Col>
        <Col xs={4}>
          <Typography color="accent" size="s" fontStyle="italic">
            <StyledIcon src={star} color="#ECEFF4" />
            69 stars
          </Typography>
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
