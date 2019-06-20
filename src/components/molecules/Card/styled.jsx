import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  height: 300px;
  border: 1px solid yellow;
  margin-top: 70px;
  border-radius: 6px;
`
export const TitleContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid yellow;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 24px;
    font-family: "Star Jhol";
    color: yellow;
  }
`
export const CardText = styled.span`
  font-family: "Star Jedi";
  text-align: center;
  color: yellow;
`
export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`