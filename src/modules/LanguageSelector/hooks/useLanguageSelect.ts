import { useSelect } from 'downshift';
import { useAppDispatch, useAppSelector } from 'hooks';
import { actions } from 'store/slices/global.slice';
import { AppLang } from 'config/constants';

const useLanguageSelect = () => {
  const languages = Object.values(AppLang);

  const dispatch = useAppDispatch();
  const { global } = useAppSelector((state) => state);
  const { isOpen, selectedItem, getLabelProps, getToggleButtonProps, getMenuProps, getItemProps } = useSelect(
    {
      items: languages,
      itemToString: (str) => (str ? str.toUpperCase() : ''),
      defaultSelectedItem: global.appLang,
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
