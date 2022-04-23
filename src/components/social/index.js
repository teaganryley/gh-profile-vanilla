import React from 'react';
import PropTypes from 'prop-types';
import {
  bird,
  link,
  location as mapIcon, // to avoid collision with prop
  mail,
  org,
} from 'assets/icons';
import Stack from 'components/stack';
import Icon from 'components/icon';

const Social = ({
  company,
  location,
  email,
  blog,
  twitter,
}) => (
  <Stack
    direction="column"
    justifyContent="space-evenly"
    alignItems="flex-start"
    spacing={1}
  >
    <Icon
      src={org}
      color="accent"
      labelStyle="italic"
    >
      {company}
    </Icon>
    <Icon
      src={mapIcon}
      color="accent"
      labelStyle="italic"
    >
      {location}
    </Icon>
    <Icon
      src={mail}
      color="accent"
      labelStyle="italic"
    >
      {email}
    </Icon>
    <Icon
      src={link}
      color="accent"
      labelStyle="italic"
    >
      {blog}
    </Icon>
    <Icon
      src={bird}
      color="accent"
      labelStyle="italic"
    >
      {twitter}
    </Icon>
  </Stack>
);

Social.propTypes = {
  company: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  blog: PropTypes.string,
  twitter: PropTypes.string,
};

export default Social;
