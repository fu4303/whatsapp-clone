import React from 'react';
import ReactLoading from 'react-loading';

import { SectionLoadingContainer } from './styles';

function SectionLoading() {
  return (
    <SectionLoadingContainer>
      <ReactLoading width="4rem" height="4rem" type="spin" color="#009688" />
    </SectionLoadingContainer>
  );
}

export default SectionLoading;
