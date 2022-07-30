import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import { Select } from 'ui/form';
import { SrOnly } from 'ui/typography';
import { StyledButtonIcon, StyledSelectList } from './LanguageSelector.styles';
import { useLanguageSelect, useSelectListPosition } from './hooks';

function LanguageSelector(): JSX.Element {
  const { t } = useTranslation();
  const { buttonWrapperRef, listWrapperRef, styles, attributes } = useSelectListPosition();
  const {
    languages,
    isOpen,
    getLabelProps,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    checkIsActiveLang,
    handleAppLangChange,
  } = useLanguageSelect();

  return (
    <div>
      <label ref={buttonWrapperRef} {...getLabelProps()}>
        <SrOnly>{t('Select app language')}</SrOnly>
        <StyledButtonIcon type="button" variant="text" {...getToggleButtonProps()}>
          <LanguageIcon />
        </StyledButtonIcon>
      </label>
      <div ref={listWrapperRef} style={styles.popper} {...attributes.popper}>
        <StyledSelectList $isOpen={isOpen} {...getMenuProps()}>
          {languages.map((lang, index) => {
            const isActiveLang: boolean = checkIsActiveLang(lang);

            return (
              <Select.Item key={lang} {...getItemProps({ item: lang, index })}>
                <Select.ItemButton
                  title={t(isActiveLang ? 'Current language' : 'Change language')}
                  onClick={!isActiveLang ? () => handleAppLangChange(lang) : undefined}
                  variant={isActiveLang ? 'contained' : 'text'}
                  color={isActiveLang ? 'secondary' : 'primary'}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {lang}
                </Select.ItemButton>
              </Select.Item>
            );
          })}
        </StyledSelectList>
      </div>
    </div>
  );
}

export default LanguageSelector;
