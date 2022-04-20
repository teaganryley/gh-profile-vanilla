import styled from 'styled-components';
import PropTypes from 'prop-types';

const getStyles = ({
  theme,
  direction,
  justifyContent,
  alignItems,
  spacing,
}) => (`
  direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  gap: ${theme.space[spacing] ?? theme.space[1]};
`);

// one-dimensional layout component
const Stack = styled.div`
  display: flex;
  min-height: 100%;
  margin: 0;
  ${getStyles}
`;

Stack.propTypes = {
  direction: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  spacing: PropTypes.number,
};
