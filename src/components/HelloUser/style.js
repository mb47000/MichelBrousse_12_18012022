import styled from 'styled-components'
import colors from '../../styles/colors'

export const Hello = styled.h1`
  margin: 0;
  font-size: 3rem;

  @media (max-width: 1340px) {
    font-size: 2.5rem;
  }
`
export const FirstName = styled.span`
  color: ${colors.secondary};
`
export const Message = styled.p`
  margin: 1.75rem 0 4rem 0;
  font-size: 1.125rem;
  font-weight: 400;

  @media (max-width: 1340px) {
    margin: 0.5rem 0 2rem 0;

    font-size: 1.05rem;
  }
`
