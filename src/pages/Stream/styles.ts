import styled from 'styled-components';

export const Container = styled.div`
.row{
  display: grid;
  grid-template-columns: 70% 25%;
  /* display: flex;
  flex-direction: row; */
}
`;

export const Video = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Chat = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
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
export const Profile = styled.div`
  display: grid;
  grid-template-columns: 70% ;
  .profile-img{
    border-radius: 100px;
    margin:0 1rem 0 0 ;
    border:2px solid  #FFC830 ;
  }
  .name{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem 0  0  0;
    color: #F6F9FF;
    font-size: 14px;
  }
  .about{
    color: #F6F9FF;
    font-size: 14px;
    margin: 0 0 0 2rem;
  }
`;