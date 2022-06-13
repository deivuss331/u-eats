import styled from 'styled-components';
import Button from 'ui/form/Button';

export default styled(Button)`
  && {
    padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  }
`;
