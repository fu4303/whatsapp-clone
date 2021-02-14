import ReactLoading from 'react-loading';

import { LoadingContainer } from './styles';

function LoadingScreen() {
  return (
    <LoadingContainer>
      <ReactLoading width="5rem" height="5rem" type="spin" color="#009688" />
    </LoadingContainer>
  );
}

export default LoadingScreen;
