import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  background-image: url("img/death-star-768.jpg");
  opacity: 0.9;

  .card {
    transition: opacity 0.5s;
    opacity: 1
  }
  .card-hide {
    opacity: 0;
  }
` 