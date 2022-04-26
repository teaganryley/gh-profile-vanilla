import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Row, Col } from 'react-grid-system';
import Stack from 'components/stack';
import Typography from 'components/typography';
import Icon from 'components/icon';
import { star } from 'assets/icons';

const Box = styled.div`
  border-bottom: 1px solid #ECEFF4;
  margin: 0 0 2%;
`;
// background colour?
// calculate "30 days" w/ function
const RepoCard = ({
  name,
  description,
  stargazers_count = 0,
  updated_at,
}) => (
  <Box>
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      <Typography color="secondary" fontStyle="italic" size="l">
        {name}
      </Typography>
      <Typography color="secondary" size="s">
        {description}
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
      >
        <Icon src={star} color="muted" labelStyle="italic">
          {stargazers_count}
        </Icon>
        <Typography color="muted">
          {' '}
          •
          {' '}
        </Typography>
        <Typography color="muted" fontStyle="italic">
          {updated_at}
        </Typography>
      </Stack>
    </Stack>
  </Box>
);

RepoCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stargazers_count: PropTypes.number,
  updated_at: PropTypes.string,
};

export default RepoCard;
