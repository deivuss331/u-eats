import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormContext, Controller } from 'react-hook-form';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { Accordion } from 'ui/layout';
import type { RestaurantsFiltersFormPayload } from 'types';

function PriceRangeFilters(): JSX.Element {
  const formLabelId = useId();
  const { t } = useTranslation();
  const { control } = useFormContext<RestaurantsFiltersFormPayload>();

  return (
    <FormControl>
      <Accordion.Details open>
        <Accordion.Summary id={formLabelId}>{t('Price range')}</Accordion.Summary>
        <Controller
          control={control}
          name="priceRange"
          render={({ field: { value = '', onChange } }) => (
            <RadioGroup aria-labelledby={formLabelId} value={value} onChange={onChange}>
              <FormControlLabel value="" label={t('All')} control={<Radio />} />
              <FormControlLabel value="expensive" label={t('Expensive')} control={<Radio />} />
              <FormControlLabel value="medium" label={t('Medium price')} control={<Radio />} />
              <FormControlLabel value="cheap" label={t('Cheap')} control={<Radio />} />
            </RadioGroup>
          )}
        />
      </Accordion.Details>
    </FormControl>
  );
}

export default PriceRangeFilters;
