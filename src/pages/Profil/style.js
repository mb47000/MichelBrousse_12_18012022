import styled from 'styled-components'

export const StyledProfile = styled.div`
  padding: 3.97rem 5.625rem 0 6.8125rem;

  @media (max-width: 1450px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 1160px) {
    padding: 1.5rem 1rem;
  }
`
export const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1450px) {
    justify-content: space-around;
  }
`
