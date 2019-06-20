import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 120px;
  width: 100%;
  height: 30px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: yellow;
  margin-top: 15px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`
export const TextButton = styled.span`
  font-family: "Star Jedi";
  font-size: 14px;
`