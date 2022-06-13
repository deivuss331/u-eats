import styled from 'styled-components';

export default styled.div`
  max-width: ${({ theme }) => theme.containerSize};
  width: 100%;
  padding: 0 ${({ theme }) => theme.space[3]};
  margin: 0 auto;
`;
