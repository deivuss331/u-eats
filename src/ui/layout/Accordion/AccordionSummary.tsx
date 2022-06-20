import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { ComponentCommonProps } from 'types';

const StyledSummary = styled.summary`
  cursor: pointer;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: ${({ theme }) => theme.fontWeight.h5};
  line-height: ${({ theme }) => theme.lineHeight.h5};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};

  .accSummary__icon {
    transition: transform 0.18s ease-in-out;
  }

  &::marker,
  &::-webkit-details-marker {
    display: none;
  }
`;

interface Props extends ComponentCommonProps {
  children: React.ReactElement;
}

function AccordionSummary({ children, ...commonProps }: Props): JSX.Element {
  return (
    <StyledSummary {...commonProps}>
      {children}
      <ExpandMoreIcon className="accSummary__icon" />
    </StyledSummary>
  );
}

export default AccordionSummary;
