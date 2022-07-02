import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import { TextField } from 'ui/form';

interface CustomerDetailsFormFieldsProps {
  names: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

/**
 * This component uses form context.
 * Make sure to wrap it inside FormProvider (react-hook-form).
 */
function CustomerDetailsFormFields({ names }: CustomerDetailsFormFieldsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      {[
        { label: t('First name'), name: names.firstName },
        { label: t('Last name'), name: names.lastName },
        { label: t('E-mail'), name: names.email },
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

export default CustomerDetailsFormFields;
