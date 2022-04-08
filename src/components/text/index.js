import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  font-family: inherit;
  text-align: left;
  font-size: ${({ fontSize }) => (fontSize || '20px')};
  color: ${({ color, theme }) => (color || theme.colors.accent)};
  font-style: ${({ fontStyle }) => (fontStyle === 'italic' ? 'italic' : 'normal')};
`;

Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.oneOf(['italic', 'normal']),
  children: PropTypes.node.isRequired,
};

export default Text;
