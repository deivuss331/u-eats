import styled from 'styled-components';
import { transparentize } from 'polished';

export default styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[1]};
  color: ${({ theme }) => transparentize(0.5, theme.color.black)};

  li {
    display: flex;

    &:not(:last-child):after {
      content: '|';
      display: inline-block;
      margin-left: ${({ theme }) => theme.space[1]};
    }
  }
`;
