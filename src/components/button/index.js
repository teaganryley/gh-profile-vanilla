import styled from 'styled-components';
import PropTypes from 'prop-types';

const getVariantStyles = ({ variant, theme }) => {
  switch (variant) {
    case 'secondary':
      return `
        color: ${theme.colors.text};
        background: ${theme.colors.background};
        width: 192px;
        font-size: 18px
      `;
    default:
      return `
        color: ${theme.colors.accent};
        background: ${theme.colors.primary};
        width: 118px;
        font-size: 22px;
      `;
  }
};

// text-align: center;
// vertical-align: center;

const Button = styled.button`
  height: 50px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-style: italic;
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
