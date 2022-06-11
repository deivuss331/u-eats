import { useFormContext, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { FormPayload } from 'modules/DeliveryCityForm/types';
import { RenderIf } from 'ui/helpers';
import { StyledWrapper, StyledTextField, StyledDeliveryCitiesList } from './DeliveryCitiesCombobox.styles';
import { useSuggestedCitiesListController } from './hooks';
import { useGetSuggestedCitiesByQuery } from './hooks/api';

const DELIVERY_CITY_MIN_LENGTH: number = 3 as const;

function DeliveryCitiesCombobox(): JSX.Element {
  const { inputRef, wrapperRef, onInputFocus, isListVisible } = useSuggestedCitiesListController();
  const { control, watch } = useFormContext<FormPayload>();
  const { data, isLoading, isError } = useGetSuggestedCitiesByQuery(watch('query'));
  const { t } = useTranslation();

  const hasVisibleList: boolean = isListVisible && !isError;

  return (
    <StyledWrapper ref={wrapperRef}>
      <Controller
        control={control}
        name="query"
        rules={{ required: true, minLength: DELIVERY_CITY_MIN_LENGTH }}
        render={({ field: { value = '', onChange }, fieldState: { error } }) => (
          <StyledTextField
            autoComplete="off"
            type="text"
            label={t('Delivery address')}
            placeholder={t('Enter delivery address')}
            error={Boolean(error)}
            value={value}
            onChange={onChange}
            onFocus={onInputFocus}
            inputRef={inputRef}
            {...(hasVisibleList
              ? {
                  'aria-haspopup': 'listbox',
                }
              : {})}
          />
        )}
      />

      <RenderIf isTrue={hasVisibleList}>
        <StyledDeliveryCitiesList data={data} isLoading={isLoading} />
      </RenderIf>
    </StyledWrapper>
  );
}

export default DeliveryCitiesCombobox;
