import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  ${props => props.disabled === true && css`color: gray; cursor: default;`}
`;

export const Label = styled.label`
  color: white;
  white-space: nowrap;
`;

export const Select = styled.select`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const Option = styled.option`
  border: none;
  cursor: pointer;
  background: darkturquoise;
`;
