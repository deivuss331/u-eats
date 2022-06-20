import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.space[4]};
  align-content: start;
  height: fit-content;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.lg} - 1px)) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
