import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormContext, Controller } from 'react-hook-form';
import { FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { Accordion } from 'ui/layout';
import type { RestaurantsFiltersFormPayload } from 'types';

function SortByFilters(): JSX.Element {
  const formLabelId = useId();
  const { t } = useTranslation();
  const { control } = useFormContext<RestaurantsFiltersFormPayload>();

  return (
    <FormControl>
      <Accordion.Details open>
        <Accordion.Summary id={formLabelId}>{t('Sort by')}</Accordion.Summary>
        <Controller
          control={control}
          name="sortBy"
          render={({ field: { value = '', onChange } }) => (
            <RadioGroup aria-labelledby={formLabelId} value={value} onChange={onChange}>
              <FormControlLabel value="" label={t('Do not sort (default)')} control={<Radio />} />
              <FormControlLabel value="reviewsDesc" label={t('Reviews descending')} control={<Radio />} />
              <FormControlLabel value="reviewsAsc" label={t('Reviews ascending')} control={<Radio />} />
              <FormControlLabel value="fastestDelivery" label={t('Fastest delivery')} control={<Radio />} />
              <FormControlLabel value="slowestDelivery" label={t('Slowest delivery')} control={<Radio />} />
            </RadioGroup>
          )}
        />
      </Accordion.Details>
    </FormControl>
  );
}

export default SortByFilters;
