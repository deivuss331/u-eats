import styled from 'styled-components';

export default styled.p`
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-weight: ${({ theme }) => theme.fontWeight.textBase};
  line-height: ${({ theme }) => theme.lineHeight.textBase};
`;
