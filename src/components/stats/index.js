import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
// import styled from 'styled-components';
import { follower, heart, star } from 'assets/icons';
import Icon from 'components/icon';

const Stats = ({ followers, following, stars }) => (
  <Row
    align="center"
    justify="between"
    direction="row"
    nogutter
  >
    <Col xs={4}>
      <Icon
        src={follower}
        color="accent"
        labelSize="s"
        labelStyle="italic"
      >
        {`${followers} followers`}
      </Icon>
    </Col>
    <Col xs={4}>
      <Icon
        src={heart}
        color="accent"
        labelSize="s"
        labelStyle="italic"
      >
        {`${following} following`}
      </Icon>
    </Col>
    <Col xs={4}>
      <Icon
        src={star}
        color="accent"
        labelSize="s"
        labelStyle="italic"
      >
        {`${stars} stars`}
      </Icon>
    </Col>
  </Row>
);

Stats.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
  stars: PropTypes.number,
};

export default Stats;
