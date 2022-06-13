import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: stretch;
  gap: ${({ theme }) => theme.space[2]};
`;
