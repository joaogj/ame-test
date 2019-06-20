import React from 'react'

import {
  MainContainer,
  TextButton,
} from './styled'

const Button = (props) => {
  return (
    <MainContainer onClick={props.onClick}>
      <TextButton>Next</TextButton>
    </MainContainer>
  )
}

export default Button