import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.img`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.accent};
`;

Icon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Icon;
