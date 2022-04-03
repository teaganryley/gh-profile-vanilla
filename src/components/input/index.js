import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  background-color: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  width: 400px;
  height: 50px;
  color: ${({ theme }) => theme.colors.muted};
  font-family: inherit;
  font-size: 18px;
  font-style: italic;
  line-height: 62px;
  text-align: left;
`;

Input.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Input;
