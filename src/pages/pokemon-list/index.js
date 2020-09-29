import React, { useState, useCallback, useEffect } from 'react';
import { Pagination } from 'antd';
import axios from 'axios';
import GridList from '../../components/grid-list';

import {
  PokemonCard,
  ContentImage,
  Image,
  MainContainer,
  PaginationContainer,
  Title,
  Text,
  PokemonContentType,
  PokemonType,
  Row,
  Column,
} from './style';

const PokemonList = () => {
  const [pagination, setPagination] = useState({
    limit: 20,
    page: 1,
  });
  const [fetching, setFetching] = useState(false);
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pagination.limit}`);
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(0);

  const loadPokemonInfo = useCallback(async (url) => {
    const { data } = await axios.get(url);
    return data;
  }, []);

  useEffect(() => {
    async function loadItems() {
      setFetching(true);
      try {
        const { data } = await axios.get(currentPageUrl);
        const { count } = data;
        const loadedPokemons = await Promise.all(
          data.results.map(async (pokemon) => loadPokemonInfo(pokemon.url)),
        );
        setPagination({ ...pagination });
        setPokemons(loadedPokemons)
        setCount(count);
      } finally {
        setFetching(false);
      }
    }
    loadItems();
  }, [currentPageUrl, pagination.page, loadPokemonInfo]);

  const handleChangePage = (pageNumber, pageSize) => {
    const nextUrl = `https://pokeapi.co/api/v2/pokemon?offset=${(pageNumber - 1) * pageSize}&limit=${pageSize}`;
    setCurrentPageUrl(nextUrl);
    setPagination({ ...pagination, page: pageNumber, limit: pageSize });
  };

  const renderPokemonItem = useCallback((pokemon) => {
    const firstTypeName = Array.isArray(pokemon?.types) ? pokemon?.types[0].type.name : null;
    return (
      <PokemonCard
        id={`pokemon-${pokemon.id}`}
        key={pokemon.id}
        to={`pokemon-detail/${pokemon.id}`}
        type={firstTypeName}
      >
        <Row>
          <ContentImage type={firstTypeName}>
            <Image src={pokemon?.sprites?.other['official-artwork'].front_default} alt={pokemon?.name} />
          </ContentImage>
          <Column>
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
            <Row>
              <Column>
                <Title>Height:</Title>
                <Text>{pokemon?.height / 10 ?? 0.0}m</Text>
              </Column>
              <Column>
                <Title>Weight:</Title>
                <Text>{pokemon?.weight / 10 ?? 0.0}Kg</Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </PokemonCard >
    );
  }, []);

  return (
    <MainContainer>
      <GridList
        id="grid-list-pokemons"
        data={pokemons}
        renderItem={renderPokemonItem}
        fetching={fetching}
        limit={pagination.limit}
      />
      <PaginationContainer>
        <Pagination
          total={count}
          current={pagination.page ?? 1}
          pageSize={pagination.limit}
          onChange={handleChangePage}
        />
      </PaginationContainer>
    </MainContainer>
  );
};

export default PokemonList;
