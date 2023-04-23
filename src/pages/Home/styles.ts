import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  .banner{
    width: 75%;
    height: auto; 
    background-color: #282A36;
    border-radius: 20px;
    padding: 15rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .search{
    width: 100%;
    background-color: #f9f9f9;
    height: 30px;
    border-radius: 20px;
  }
  .btns{
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
export const Main = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;