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

export const ModalWrapper = styled.div`
.header{
  display: flex;
  flex-direction: row-reverse;
  button{
    background-color: #282A36;
    border: 0;
  }
}
.body{
  width: 100%;
  h1{
    color:#f9f9f9;
  }
  .error{
    font-size: 10px;
    color: #ff6961;
  }
}
.footer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  button{
    background-color: #FFC830;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    padding: 1rem;
    border-radius: 0.6rem;
    border: 0;
    :hover {
        filter: brightness(1.1);
        cursor: pointer;
      }
  }
  span{
     font-size: 14px;
    font-size: 14px;
    text-decoration: underline;
    :hover {
        filter: brightness(1.1);
      }
  }
}
`