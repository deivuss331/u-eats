import styled from 'styled-components';
import { motion } from 'framer-motion';
import { H4 } from 'ui/typography';

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

export const StyledHeadline = styled(H4)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  margin: 0;
`;
