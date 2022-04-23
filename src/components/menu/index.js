import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import Button from 'components/button';
import Typography from 'components/typography';
import Stats from 'components/stats';
import Social from 'components/social';

const Avatar = styled.img`
  display: block;
  width: 100%;
  margin: auto
`;

const Menu = ({
  avatar_url, name, login, ...user
}) => (
  <Row
    align="center"
    justify="start"
    direction="column"
    style={{ minHeight: '100%', margin: '0' }}
  >
    <Col xs={12} style={{ padding: '10% 10% 5%', width: '90%' }}>
      <Avatar src={avatar_url} alt="user avatar" />
    </Col>
    <Col xs={12}>
      <Typography color="accent" size="xl" fontStyle="italic">
        {name}
      </Typography>
      <Typography color="accent" size="l" fontStyle="italic">
        {`@${login}`}
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
      <Stats {...user} />
    </Col>
    <Col xs={12}>
      <Social {...user} />
    </Col>
    <Col
      xs={12}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <Button variant="secondary">
        Voltar
      </Button>
    </Col>
  </Row>
);

Menu.propTypes = {
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  login: PropTypes.string,
};

export default Menu;
