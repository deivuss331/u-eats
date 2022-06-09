import { useTranslation } from 'react-i18next';
import { StyledLoader } from './Loader.styles';

interface IProps {
  className?: string;
}

function Loader({ className }: IProps): JSX.Element {
  const { t } = useTranslation();

  return <StyledLoader className={className} aria-label={t('Loading')} role="status" />;
}

export default Loader;
