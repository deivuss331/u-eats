import styled from 'styled-components';

export default styled.p`
  font-size: ${({ theme }) => theme.fontSize.textLg};
  font-weight: ${({ theme }) => theme.fontWeight.textLg};
  line-height: ${({ theme }) => theme.lineHeight.textLg};
`;
