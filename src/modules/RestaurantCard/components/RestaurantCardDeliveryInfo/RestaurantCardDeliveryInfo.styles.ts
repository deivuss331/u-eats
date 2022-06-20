import styled from 'styled-components';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.semiBlack};
`;

export const StyledDeliveryDiningIcon = styled(DeliveryDiningIcon)`
  margin-right: ${({ theme }) => theme.space[1]};
`;

export const StyledDurationTime = styled.span`
  opacity: 0.5;
`;
