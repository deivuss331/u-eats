import styled from 'styled-components';
import { Alert } from '@mui/material';

export default styled(Alert)`
  && {
    height: fit-content;
    font-size: ${({ theme }) => theme.fontSize.h6};
    font-weight: ${({ theme }) => theme.fontWeight.h6};
    line-height: ${({ theme }) => theme.lineHeight.h6};
  }
`;
