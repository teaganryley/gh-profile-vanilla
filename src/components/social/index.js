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
  twitter_username,
}) => (
  <Stack
    direction="column"
    justifyContent="space-evenly"
    alignItems="flex-start"
    spacing={1}
  >
    {company && (
      <Icon
        src={org}
        color="accent"
        labelStyle="italic"
      >
        {company}
      </Icon>
    )}
    {location && (
      <Icon
        src={mapIcon}
        color="accent"
        labelStyle="italic"
      >
        {location}
      </Icon>
    )}
    {email && (
      <Icon
        src={mail}
        color="accent"
        labelStyle="italic"
      >
        {email}
      </Icon>
    )}
    {blog && (
      <Icon
        src={link}
        color="accent"
        labelStyle="italic"
      >
        {blog}
      </Icon>
    )}
    {twitter_username && (
      <Icon
        src={bird}
        color="accent"
        labelStyle="italic"
      >
        {twitter_username}
      </Icon>
    )}
  </Stack>
);

Social.propTypes = {
  company: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  blog: PropTypes.string,
  twitter_username: PropTypes.string,
};

export default Social;
