import SearchIcon from '@mui/icons-material/Search';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import queryString from 'query-string';
import { appPaths } from 'routes';
import type { FormPayload } from 'components/DeliveryCityForm/types';
import { DeliveryCitiesCombobox } from 'components/DeliveryCityForm/components';
import { Button } from 'ui/form';
import { StyledForm } from './DeliveryCityForm.styles';

function DeliveryCityForm(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleSubmit, ...formMethods } = useForm<FormPayload>();

  const submitHandler = ({ query }: FormPayload) => {
    if (!query) {
      toast.error(t('Please type delivery address'));
      return;
    }

    navigate({
      pathname: appPaths.browseRestaurants(),
      search: queryString.stringify({ query }),
    });
  };

  return (
    <FormProvider handleSubmit={handleSubmit} {...formMethods}>
      <StyledForm onSubmit={handleSubmit(submitHandler)}>
        <DeliveryCitiesCombobox />
        <Button type="submit" startIcon={<SearchIcon />}>
          {t('Search restaurants')}
        </Button>
      </StyledForm>
    </FormProvider>
  );
}

export default DeliveryCityForm;
