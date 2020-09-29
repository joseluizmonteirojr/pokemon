import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 20px;
  height: 100%;
  background-color: #e0e0de;
  border-radius: 4px;
  margin: 8px;
`;

export const Filler = styled.div`
  width: 100%;
  height: ${props => (props.progress > 100 ? 100 : props.progress)}%;
  background-color: ${props => props.bgColor};
  border-radius: inherit;
`;
