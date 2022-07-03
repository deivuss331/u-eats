import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.space[8]};
`;

export const StyledBottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space[4]};
`;
