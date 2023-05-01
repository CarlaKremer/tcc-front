import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1A1922;
  height: 100%;
  min-height: 100vh;
  min-width: 10vw;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 5rem;

  overflow-y: auto;
  position: relative; 

  @media (max-width: 1024px) {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    margin-top: 1.25rem;
  }
`;