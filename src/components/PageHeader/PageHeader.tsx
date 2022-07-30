import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LanguageSelector } from 'components';
import { RenderIf } from 'ui/helpers';
import { StyledHeader, StyledContainer, StyledButtonIcon, StyledUEatsLogo } from './PageHeader.styles';
import { useHasVisibleBackground } from './hooks';

function PageHeader(): JSX.Element {
  const { t } = useTranslation();
  const hasVisibleBackground = useHasVisibleBackground();

  const { REACT_APP_PROJECT_REPO_URL } = process.env;

  const goToRepoPage = () => window.open(REACT_APP_PROJECT_REPO_URL, '_blank', 'noopener,noreferrer');

  return (
    <StyledHeader $hasVisibleBackground={hasVisibleBackground}>
      <StyledContainer>
        <StyledUEatsLogo />
        <RenderIf isTrue={Boolean(REACT_APP_PROJECT_REPO_URL)}>
          <StyledButtonIcon type="button" title={t('See source code')} onClick={goToRepoPage} variant="text">
            <GitHubIcon />
          </StyledButtonIcon>
        </RenderIf>
        <LanguageSelector />
      </StyledContainer>
    </StyledHeader>
  );
}

export default PageHeader;
