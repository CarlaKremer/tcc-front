import styled from 'styled-components';

export const Container = styled.div`
  width: 4rem;
  height: 100%;
  background: #282A36;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 40px;  

  object-fit: cover;

  .user{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .fav{
    margin-top: 20px;
  }
  .name{
    margin-top: 0.25rem;
    font-size: 12px;
    color: #F6F9FF;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;