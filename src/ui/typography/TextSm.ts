import styled from 'styled-components';

export default styled.p`
  font-size: ${({ theme }) => theme.fontSize.textSm};
  font-weight: ${({ theme }) => theme.fontWeight.textSm};
  line-height: ${({ theme }) => theme.lineHeight.textSm};
`;
