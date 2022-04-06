import styled from 'styled-components';
import IconTint from 'react-icon-tint';

const StyledIcon = styled(IconTint)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.accent};
`;

export default StyledIcon;
