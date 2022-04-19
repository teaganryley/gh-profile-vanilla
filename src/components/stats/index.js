/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { follower, heart, star } from 'assets/icons';

const StyledCol = styled(Col)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Stats = ({ }) => (
  <Row align="center" justify="between" direction="row" nogutter>
    <StyledCol xs={4}>
      <StyledIcon src={follower} color="#ECEFF4" />
      <Typography color="accent" size="s" fontStyle="italic">
        {user.followers}
        {' '}
        followers
      </Typography>
    </StyledCol>
    <StyledCol xs={4}>
      <StyledIcon src={heart} color="#ECEFF4" />
      <Typography color="accent" size="s" fontStyle="italic">
        {user.following}
        {' '}
        following
      </Typography>
    </StyledCol>
    <StyledCol xs={4}>
      <StyledIcon src={star} color="#ECEFF4" />
      <Typography color="accent" size="s" fontStyle="italic">
        69 stars
      </Typography>
    </StyledCol>
  </Row>
);

Stats.propTypes = {
};

export default Stats;
