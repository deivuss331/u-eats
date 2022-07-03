import styled from 'styled-components';

export default styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[3]};
  max-width: 570px;
`;
