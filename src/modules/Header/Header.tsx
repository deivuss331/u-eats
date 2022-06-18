import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useViewportScroll } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LanguageSelector } from 'modules';
import { RenderIf } from 'ui/helpers';
import { StyledContainer, StyledButtonIcon, StyledUEatsLogo } from './Header.styles';

function Header(): JSX.Element {
  const { scrollYProgress } = useViewportScroll();
  const [hasVisibleBackground, setHasVisibleBackground] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    scrollYProgress.onChange((yProgress) => {
      setHasVisibleBackground(yProgress > 0);
    });
  }, [scrollYProgress]);

  const { REACT_APP_PROJECT_REPO_URL } = process.env;

  const goToRepoPage = () => window.open(REACT_APP_PROJECT_REPO_URL, '_blank', 'noopener,noreferrer');

  return (
    <StyledContainer as="header" $hasVisibleBackground={hasVisibleBackground}>
      <StyledUEatsLogo />
      <RenderIf isTrue={Boolean(REACT_APP_PROJECT_REPO_URL)}>
        <StyledButtonIcon type="button" title={t('See source code')} onClick={goToRepoPage} variant="text">
          <GitHubIcon />
        </StyledButtonIcon>
      </RenderIf>
      <LanguageSelector />
    </StyledContainer>
  );
}

export default Header;
