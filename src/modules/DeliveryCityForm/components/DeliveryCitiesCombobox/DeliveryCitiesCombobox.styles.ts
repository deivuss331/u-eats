import styled from 'styled-components';
import { TextField } from 'ui/form';
import DeliveryCitiesList from 'modules/DeliveryCityForm/components/DeliveryCitiesList';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 460px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledDeliveryCitiesList = styled(DeliveryCitiesList)`
  && {
    position: absolute;
  }
`;
