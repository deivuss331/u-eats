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
        { label: t('Address line'), name: names.addressLine },
        { label: t('City/Town'), name: names.locality },
        { label: t('Post code'), name: names.postalCode },
        { label: t('Country'), name: names.countryRegion },
      ].map(({ label, name }) => (
        <Controller
          key={name}
          name={name}
          rules={{ required: true }}
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
