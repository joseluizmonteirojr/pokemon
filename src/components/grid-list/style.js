import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 16px 16px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 678px) {
    grid-template-columns: 1fr;
  }
`;
