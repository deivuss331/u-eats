import styled from 'styled-components';

export default styled.details`
  width: 100%;

  &[open] summary .accSummary__icon {
    transform: rotate(180deg);
  }
`;
