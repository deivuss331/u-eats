import styled from 'styled-components';
import { H1 } from 'ui/typography';
import { InlineAnnotationsList } from 'ui/layout';

export const StyledHeroWrapper = styled.div`
  position: relative;
  height: 260px;
  margin-bottom: ${({ theme }) => theme.space[6]};

  &:after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.12) 100%);
  }
`;

export const StyledHeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;

export const StyledTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
`;

export const StyledHeadline = styled(H1)`
  min-width: 0;
  overflow-wrap: break-word;
`;

export const StyledInlineAnnotationsList = styled(InlineAnnotationsList)`
  margin: ${({ theme }) => `${theme.space[1]} 0 ${theme.space[8]}`};
`;
