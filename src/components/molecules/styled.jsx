import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  height: 300px;
  border: 1px solid #222222;
  margin-top: 70px;
`
export const TitleContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid #222222;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 24px;
    font-family: "StarJedi";
  }
`
export const CardText = styled.span`
  font-family: "StarJedi";
  text-align: center;
`
export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`