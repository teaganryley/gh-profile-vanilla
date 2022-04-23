import React from 'react';
import {
  bird,
  link,
  location,
  mail,
  org,
} from 'assets/icons';
import Stack from 'components/stack';
import Icon from 'components/icon';

const Social = () => (
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
      organization
    </Icon>
    <Icon
      src={location}
      color="accent"
      labelStyle="italic"
    >
      location
    </Icon>
    <Icon
      src={mail}
      color="accent"
      labelStyle="italic"
    >
      email
    </Icon>
    <Icon
      src={link}
      color="accent"
      labelStyle="italic"
    >
      www.website.com
    </Icon>
    <Icon
      src={bird}
      color="accent"
      labelStyle="italic"
    >
      @bird
    </Icon>
  </Stack>
);

export default Social;
