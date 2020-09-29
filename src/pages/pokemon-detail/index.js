import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { COLORS } from '../../constants/colors';
import ProgressBar from '../../components/progress-bar';

import {
  MainContainer,
  HeaderContainer,
  HeaderContent,
  ArrowButton,
  ContentImage,
  Image,
  Title,
  Text,
  PokemonContentType,
  PokemonType,
  AtributesContainer,
  StatusBarContainer,
  StatusBar,
  SizeContainer,
  LoadingContainer,
} from './style';

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [fetching, setFetching] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function getPokemon() {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      setPokemon({ ...data });
      setFetching(false);
    }
    getPokemon();
  }, [pokemonId]);

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleForward = useCallback(() => {
    history.push(`/pokemon-detail/${Number(pokemonId) + 1}`);
  }, [history, pokemonId]);

  const firstTypeName = Array.isArray(pokemon?.types) ? pokemon?.types[0].type.name : null;

  return fetching ? (
    <LoadingContainer>Loading...</LoadingContainer>
  ) : (
      <MainContainer>
        <HeaderContainer type={firstTypeName}>
          <HeaderContent>
            <ArrowButton type="button" onClick={handleBack}>
              <FiArrowLeft />
            </ArrowButton>
            <div>
              <Title type={firstTypeName}>{pokemon?.name}</Title>
              <Title type={firstTypeName} colored>{String(pokemon?.id).padStart(4, '0')}</Title>
            </div>
            <PokemonContentType>
              {pokemon.types.map(pokemonType => (
                <PokemonType
                  key={`${pokemon.id}-${pokemonType.type.name}`}
                  type={pokemonType.type.name}
                >
                  {pokemonType.type.name}
                </PokemonType>
              ))}
            </PokemonContentType>
            <ContentImage type={firstTypeName}>
              <Image src={pokemon?.sprites?.other['official-artwork'].front_default} alt={pokemon?.name} />
            </ContentImage>
            <ArrowButton type="button" onClick={handleForward}>
              <FiArrowRight />
            </ArrowButton>
          </HeaderContent>
        </HeaderContainer>
        <AtributesContainer type={firstTypeName}>
          <Title type={firstTypeName} colored>Base States</Title>
          <StatusBarContainer>
            {pokemon.stats.map(attribute => (
              <StatusBar key={attribute.stat.name}>
                <Text>{attribute.stat.name}</Text>
                <Title>{attribute.base_stat}</Title>
                <ProgressBar
                  bgColor={COLORS[firstTypeName]}
                  progress={attribute.base_stat}
                />
              </StatusBar>
            ))}
          </StatusBarContainer>
          <SizeContainer>
            <div>
              <Title>Height:</Title>
              <Text>{pokemon?.height / 10 ?? 0.0}m</Text>
            </div>
            <div>
              <Title>Weight:</Title>
              <Text>{pokemon?.weight / 10 ?? 0.0}Kg</Text>
            </div>
          </SizeContainer>
          <Title type={firstTypeName} colored>Abilities</Title>
          <Text>
            {pokemon.abilities.map(({ ability }) => ability.name).join(', ')}
          </Text>
          <Title type={firstTypeName} colored>Forms: </Title>
          <Text>
            {pokemon.forms.map(({ name }) => name).join(', ')}
          </Text>
        </AtributesContainer>
      </MainContainer>
    );
};

export default PokemonDetail;
