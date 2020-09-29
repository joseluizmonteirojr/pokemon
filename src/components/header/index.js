
import React, { useCallback } from 'react';
import { Container, Image } from './style';
import { useHistory } from 'react-router-dom';


const Header = () => {
  const history = useHistory();

  const handleGoHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <>
      <Container onClick={handleGoHome}>
        <Image src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png" alt="Pokémon" />
      </Container>
    </>
  );
};

export default Header;
