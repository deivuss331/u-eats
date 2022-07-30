import { useSelect } from 'downshift';
import { useAppDispatch, useAppSelector } from 'hooks';
import { actions } from 'store/slices/app.slice';
import { AppLang } from 'config/constants';

const useLanguageSelect = () => {
  const languages = Object.values(AppLang);

  const dispatch = useAppDispatch();
  const { app } = useAppSelector((state) => state);
  const { isOpen, selectedItem, getLabelProps, getToggleButtonProps, getMenuProps, getItemProps } = useSelect(
    {
      items: languages,
      itemToString: (str) => (str ? str.toUpperCase() : ''),
      defaultSelectedItem: app.lang,
    },
  );

  return {
    languages,
    isOpen,
    selectedItem,
    checkIsActiveLang: (appLang: AppLang) => appLang === selectedItem,
    getLabelProps,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    handleAppLangChange: (appLang: AppLang) => dispatch(actions.changeAppLang({ appLang })),
  };
};

export default useLanguageSelect;
