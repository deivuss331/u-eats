import styled from 'styled-components';

export default styled.ul`
  padding: 2px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow.popup};
`;
