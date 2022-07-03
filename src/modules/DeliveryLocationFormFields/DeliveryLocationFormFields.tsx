import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import { TextField } from 'ui/form';

interface DeliveryLocationFormFieldsProps {
  names: {
    addressLine: string;
    locality: string;
    postalCode: string;
    countryRegion: string;
  };
}

/**
 * This component uses form context.
 * Make sure to wrap it inside FormProvider (react-hook-form).
 */
function DeliveryLocationFormFields({ names }: DeliveryLocationFormFieldsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      {[
        { label: t('Address line'), name: names.addressLine, minLength: 5 },
        { label: t('City/Town'), name: names.locality, minLength: 2 },
        { label: t('Post code'), name: names.postalCode, minLength: 4 },
        { label: t('Country'), name: names.countryRegion, minLength: 2 },
      ].map(({ label, name, minLength }) => (
        <Controller
          key={name}
          name={name}
          rules={{ required: true, minLength }}
          render={({ field: { value = '', onChange }, fieldState: { error } }) => (
            <TextField
              label={label}
              placeholder={t('Please type')}
              value={value}
              onChange={onChange}
              error={Boolean(error)}
            />
          )}
        />
      ))}
    </>
  );
}

export default DeliveryLocationFormFields;
