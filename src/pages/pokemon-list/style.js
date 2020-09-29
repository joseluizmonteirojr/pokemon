import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { COLORS } from '../../constants/colors';

export const PokemonCard = styled(Link)`
  background-color: ${props => COLORS[props.type]};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: inherit;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s linear;
  &:hover {
    color: inherit;
    background-color: ${props => darken(0.1, COLORS[props.type])};
  }
`;

export const ContentImage = styled.div`
  background-color: ${props => lighten(0.1, COLORS[props.type])};
  border-radius: 50%;
  text-align: center;
  width: 135px;
`;

export const Image = styled.img`
  width: inherit;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px 8px 16px 8px;
`;

export const Title = styled.h3`
  text-transform: capitalize;
  font-style: normal;
  font-weight: 600;
  ${props => props.colored && props.type && css` color: ${darken(0.2, COLORS[props.type])}; `}
`;

export const Text = styled.h4`
  text-transform: capitalize;
  font-weight: 500;
  padding: 8px;
  ${props => props.type && css`color: ${darken(0.2, COLORS[props.type])};`}
`;

export const PokemonContentType = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 8px;
`;

export const PokemonType = styled(Text)`
  border-radius: 20px;
  display: inline;
  padding: 2px 8px;
  font-weight: 500;
  color: white;
  margin: 4px;
  background-color: ${props => darken(0.2, COLORS[props.type])};
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

export const Column = styled(Row)`
  flex-direction: column;
`;
