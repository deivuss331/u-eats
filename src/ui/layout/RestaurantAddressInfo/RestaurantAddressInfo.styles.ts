import styled from 'styled-components';
import MapIcon from '@mui/icons-material/Map';
import { TextSm } from 'ui/typography';

export const StyledWrapper = styled(TextSm)`
  display: flex;
  align-items: center;
`;

export const StyledMapIcon = styled(MapIcon)`
  margin-right: ${({ theme }) => theme.space[1]};
`;
