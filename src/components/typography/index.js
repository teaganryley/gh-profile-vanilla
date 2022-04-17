import styled from 'styled-components';
import PropTypes from 'prop-types';

const Typography = styled.p`
  ${({ theme, color, size }) => `
    margin: 0;
    font-family: inherit;
    text-align: left;
    color: ${theme.colors[color] ?? theme.colors.primary};
    size: ${theme.fontSizes[size] ?? theme.fontSizes.m};
  `}
`;

Typography.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
