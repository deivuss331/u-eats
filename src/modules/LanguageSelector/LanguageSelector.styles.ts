import styled from 'styled-components';
import { hideVisually } from 'polished';
import { ButtonIcon, Select } from 'ui/form';

export const StyledLabel = styled.label`
  ${hideVisually()}
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  && {
    color: inherit;
  }
`;

interface StyledSelectListProps {
  $isOpen: boolean;
}

export const StyledSelectList = styled(Select.List)<StyledSelectListProps>`
  visibility: ${({ $isOpen }) => ($isOpen ? null : 'hidden')};
`;
