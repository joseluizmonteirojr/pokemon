import React from 'react';
import CardLoader from '../card-loader';
import { Container } from './style';

const GridList = ({
  id,
  data,
  renderItem,
  fetching,
  limit,
}) => {
  return (
    <Container id={id}>
      {fetching ? (
          <CardLoader repeat={limit} />
      ) : (
        data.map(item => renderItem(item))
      )}
    </Container>
  );
};

export default GridList;
