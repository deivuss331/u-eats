import styled from 'styled-components';
import Button from './Button';

export default styled(Button)`
  && {
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;
    display: grid;
    place-items: center;
  }
`;
