import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { darken, lighten } from 'polished';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  background: ${props => COLORS[props.type]};
  min-height: 240px;
`;

export const HeaderContent = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowButton = styled.button`
  border: 0px;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: background 0.2s linear;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const ContentImage = styled.div`
  background-color: ${props => lighten(0.1, COLORS[props.type])};
  border-radius: 50%;
  text-align: center;
  width: 240px;
`;

export const Image = styled.img`
  width: inherit;
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

export const AtributesContainer = styled.div`
  padding: 20px;
  background: #fafafa;
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const StatusBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 350px;
  padding: 16px;
`;

export const StatusBar = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column-reverse;
  align-items: center;
`;

export const SizeContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  padding: 8px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

