import styled from 'styled-components';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { TextSm } from 'ui/typography';

export const StyledWrapper = styled(TextSm)`
  display: flex;
  align-items: center;
`;

export const StyledDeliveryDiningIcon = styled(DeliveryDiningIcon)`
  margin-right: ${({ theme }) => theme.space[1]};
`;
