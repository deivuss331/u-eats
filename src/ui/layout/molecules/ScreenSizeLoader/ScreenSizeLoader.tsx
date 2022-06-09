import { Loader } from 'ui/layout/atoms';
import { Wrapper } from './ScreenSizeLoader.styles';

function ScreenSizeLoader(): JSX.Element {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
}

export default ScreenSizeLoader;
