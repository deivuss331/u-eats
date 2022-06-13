import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LanguageSelector } from 'modules';
import { RenderIf } from 'ui/helpers';
import { StyledContainer, StyledHeader, StyledButtonIcon, StyledUEatsLogo } from './Header.styles';

function Header(): JSX.Element {
  const { t } = useTranslation();

  const { REACT_APP_PROJECT_REPO_URL } = process.env;

  const goToRepoPage = () => window.open(REACT_APP_PROJECT_REPO_URL, '_blank', 'noopener,noreferrer');

  return (
    <StyledHeader>
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

export default Header;
