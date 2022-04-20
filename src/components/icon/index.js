import React from 'react';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components';
import IconTint from 'react-icon-tint';
import Typography from 'components/typography';

/*
  0) review react docs
  1) Abstract stats into new component, composed with icon + label, box, stack
  2) test Stack within Menu component--> default values?
  3) Abstract social into "..."

  Notes:
    - what happens when col is rendered without children?
*/

const MyIcon = styled(IconTint)`
  width: 30px;
  height: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = ({
  src,
  color,
  label,
  labelSize,
  labelStyle,
}) => {
  const theme = useTheme();
  console.log('theme object from ', theme);

  return (
    <Wrapper>
      <MyIcon src={src} color={theme.colors[color]} />
      <Typography
        color={color}
        size={labelSize}
        fontStyle={labelStyle}
      >
        {label}
      </Typography>
    </Wrapper>
  );
};

Icon.propTypes = {
  src: PropTypes.node.isRequired,
  color: PropTypes.string,
  label: PropTypes.string,
  labelSize: PropTypes.string,
  labelStyle: PropTypes.string,
};

export default Icon;
