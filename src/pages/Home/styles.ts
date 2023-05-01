import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
  padding-right: 0rem;
`;
export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 75% 20%;
  gap: 1.25rem;
  .banner{
    width: 100%;
    height: 25rem; 
    background-color: #282A36;
    border-radius: 20px;
    padding: 0rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .search{
    width: 50%;
    background-color: #f9f9f9;
    height: 30px;
    border-radius: 20px;

  }
  .btns{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
export const Main = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;