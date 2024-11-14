import React from 'react'

import { ButtonContainer } from './syles'

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
        Buscar
    </ButtonContainer>
  )
}

export default Button
