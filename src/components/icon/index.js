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
const getIconSize = ({ size }) => {
  switch (size) {
    case 'l':
      return `
        width: 36px;
        height: 36px;
      `;
    default:
      return `
        width: 30px;
        height: 30px;
      `;
  }
};

const MyIcon = styled(IconTint)`
  ${getIconSize}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = ({
  src,
  children,
  color,
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
        {children}
      </Typography>
    </Wrapper>
  );
};

Icon.propTypes = {
  src: PropTypes.node.isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
  labelSize: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  labelStyle: PropTypes.oneOf(['normal', 'italic']),
};

export default Icon;
