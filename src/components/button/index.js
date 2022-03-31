import styled from 'styled-components';
import PropTypes from 'prop-types';

const getVariantStyles = ({ variant, theme }) => {
  switch (variant) {
    case 'secondary':
      return `
        color: ${theme.colors.text};
        background: ${theme.colors.background};
      `;
    default:
      return `
        color: ${theme.colors.accent};
        background: ${theme.colors.primary};
      `;
  }
};

const Button = styled.button`
  height: 50px;
  border-radius: 5px;
  ${getVariantStyles};
  
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
