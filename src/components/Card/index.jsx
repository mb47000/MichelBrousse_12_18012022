import React from 'react'
import {
  StyledCard,
  StyledCardData,
  StyledCardType,
  StyledIcon,
  StyledValue,
} from './style'

const Card = ({ type, value, unit }) => {
  return (
    <StyledCard>
      <StyledIcon type={type} />
      <StyledCardData>
        <StyledValue>
          {value}
          {unit}
        </StyledValue>

        <StyledCardType>{type}</StyledCardType>
      </StyledCardData>
    </StyledCard>
  )
}

export default Card
