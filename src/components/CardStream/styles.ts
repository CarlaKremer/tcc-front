import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;
  width: fit-content;
  background-color: #282A36;
  border-radius: 20px;
  padding: 30px 20px;
  gap: 20px;
  margin-top: 1rem;
  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .info{

  }
  .image{
    border-radius: 20px;
  }
  .profile-img{
    border-radius: 100px;
    margin-right: 1rem;
  }
  .name{
    font-size: 12px;
    color: #F6F9FF;
  }
`;