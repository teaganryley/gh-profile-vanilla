import styled from 'styled-components';
import PropTypes from 'prop-types';

const Typography = styled.p`
  margin: 0;
  font-family: inherit;
  text-align: left;
  ${({
    theme, color, size, fontStyle,
  }) => `
    font-style: ${fontStyle ?? 'normal'};
    color: ${theme.colors[color] ?? theme.colors.primary};
    font-size: ${theme.fontSizes[size] ?? theme.fontSizes.m};
  `}
`;

Typography.propTypes = {
  color: PropTypes.string,
  fontStyle: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
};

export default Typography;
