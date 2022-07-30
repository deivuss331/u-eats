import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: stretch;
  gap: ${({ theme }) => theme.space[2]};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.sm} - 1px)) {
    flex-direction: column;
  }
`;
