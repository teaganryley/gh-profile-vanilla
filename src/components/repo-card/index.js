import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Row, Col } from 'react-grid-system';
import Stack from 'components/stack';
import Typography from 'components/typography';
import Icon from 'components/icon';
import { star } from 'assets/icons';

const Box = styled.div`
  border-bottom: 1px solid #ECEFF4;
`;

const RepoCard = () => (
  <Box>
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      <Typography color="muted" fontStyle="italic" size="l">
        Repository Name
      </Typography>
      <Typography color="muted" size="s">
        Lorem ipsum dolor sit Amen, consectetur adipiscing elia.
        {' '}
        Sed tincidunt longue ligula in rutrum.
        {' '}
        Morbi nec lacus condimentum, hendrerit mi eu, Fuegian.
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
      >
        <Icon src={star} color="muted" labelStyle="italic">
          100 stars
        </Icon>
        <Typography color="muted">
          {' '}
          •
          {' '}
        </Typography>
        <Typography color="muted" fontStyle="italic">
          Updated 30 days ago
        </Typography>
      </Stack>
    </Stack>
  </Box>
);

RepoCard.propTypes = {

};

export default RepoCard;
