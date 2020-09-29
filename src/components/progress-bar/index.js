import React from 'react';
import { Container, Filler } from './style';

const ProgressBar = ({ bgColor, progress }) => {
  return (
    <Container>
      <Filler bgColor={bgColor} progress={progress} />
    </Container>
  );
};

export default ProgressBar;
