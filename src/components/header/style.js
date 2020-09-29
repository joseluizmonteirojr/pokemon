import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-bottom: 2px solid #dedde0;
  transition: background 0.2s linear;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 35px;
`;
