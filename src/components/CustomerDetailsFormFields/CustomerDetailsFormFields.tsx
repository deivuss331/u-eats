import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import { TextField } from 'ui/form';
import { EMAIL_REGEX } from 'config/regex';

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
        { label: t('First name'), name: names.firstName, minLength: 2 },
        { label: t('Last name'), name: names.lastName, minLength: 2 },
        { label: t('E-mail'), name: names.email, pattern: EMAIL_REGEX },
      ].map(({ label, name, minLength, pattern }) => (
        <Controller
          key={name}
          name={name}
          rules={{ required: true, minLength, pattern }}
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
