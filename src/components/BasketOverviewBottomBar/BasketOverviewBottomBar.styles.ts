import styled from 'styled-components';
import { motion } from 'framer-motion';
import { H6 } from 'ui/typography';
import { Container } from 'ui/layout';

export const StyledMotionWrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow.basketOverviewBar};
  z-index: ${({ theme }) => theme.zIndex.basketOverviewBar};
  transform: translateY(100%);
  padding: ${({ theme }) => theme.space[4]} 0;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};

  @media (max-width: 390px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledHeadline = styled(H6)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  margin: 0;
`;

export const StyledHeadlineGridWrapper = styled.span`
  display: grid;
`;
