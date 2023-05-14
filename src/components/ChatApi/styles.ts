import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1A1922;
  padding: 0 1rem;

  .msg-container{
    display: flex;
    flex-direction: row;
  }
  .user{
    color: #FFC830;
    font-size: 12px;
    margin-right: 0.5rem;
  }
  .msg{
    color: #F6F9FF;
    font-size: 12px;
  }
`;