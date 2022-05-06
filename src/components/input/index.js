import styled from 'styled-components';

const getStyles = ({
  color,
  bgColor,
  borderColor,
  theme,
}) => `
  background-color: ${bgColor};
  border: 1px solid ${theme.colors[borderColor]};
  color: ${theme.colors[color]};
`;

const Input = styled.input`
  border-radius: 5px;
  width: 400px;
  height: 50px;
  font-family: inherit;
  font-size: 18px;
  font-style: italic;
  line-height: 62px;
  text-align: left;
  ${getStyles};
`;

export default Input;
