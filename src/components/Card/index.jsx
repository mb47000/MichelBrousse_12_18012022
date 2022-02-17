import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledCard,
  StyledCardData,
  StyledCardType,
  StyledIcon,
  StyledValue,
} from './style'

/**
 * Card Component
 * @component
 * @param {string} type
 * @param {string|number} value
 * @param {string} unit
 * @returns {component}
 */
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

Card.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  unit: PropTypes.string.isRequired,
}

export default Card
