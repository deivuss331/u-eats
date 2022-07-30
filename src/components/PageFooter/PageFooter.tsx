import { useTranslation } from 'react-i18next';
import { RenderIf } from 'ui/helpers';
import { UEatsLogo } from 'ui/layout';
import { StyledContainer, StyledFooter, StyledAppCredentials } from './PageFooter.styles';

function PageFooter(): JSX.Element {
  const { t } = useTranslation();

  const { REACT_APP_VERSION, REACT_APP_AUTHOR_NAME, REACT_APP_AUTHOR_EMAIL } = process.env;

  return (
    <StyledFooter>
      <StyledContainer>
        <UEatsLogo />
        <StyledAppCredentials>
          <RenderIf isTrue={Boolean(REACT_APP_VERSION)}>
            <p>v{REACT_APP_VERSION}</p>
          </RenderIf>
          <RenderIf isTrue={Boolean(REACT_APP_AUTHOR_EMAIL) && Boolean(REACT_APP_AUTHOR_NAME)}>
            <p>
              {t('Made by')} <a href={`mailto:${REACT_APP_AUTHOR_EMAIL}`}>{REACT_APP_AUTHOR_NAME}</a>
            </p>
          </RenderIf>
        </StyledAppCredentials>
      </StyledContainer>
    </StyledFooter>
  );
}

export default PageFooter;
