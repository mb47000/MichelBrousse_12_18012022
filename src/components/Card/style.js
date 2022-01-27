import styled from 'styled-components'
import calorieIcon from '../../assets/png/icon-calorie.png'
import carbohydrateIcon from '../../assets/png/icon-carbohydrate.png'
import lipidIcon from '../../assets/png/icon-lipid.png'
import proteinIcon from '../../assets/png/icon-protein.png'
import colors from '../../styles/colors'

let iconSet = {
  Calories: calorieIcon,
  Glucides: carbohydrateIcon,
  Lipides: lipidIcon,
  Protéines: proteinIcon,
}

export const StyledCard = styled.div`
  display: flex;
  padding: 2rem;
  text-align: left;
  background: ${colors.backgroundGrey};
  margin-bottom: 2.4375rem;
  width: 258px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);

  @media (max-width: 1340px) {
    padding: 1.75rem 1.25rem;
  }
`

export const StyledIcon = styled.div`
  ${(props) => `background: url(${iconSet[props.type]})`};
  background-size: cover;
  height: 60px;
  width: 60px;
`
export const StyledCardData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 1.5rem;

  @media (max-width: 1340px) {
    padding: 0 0 0 1rem;
  }
`
export const StyledCardType = styled.div`
  margin: 0.125rem 0;
  color: ${colors.textGrey};
`

export const StyledValue = styled.div`
  margin: 0.125rem 0;
  font-size: 1.2rem;
  font-weight: 700;

  @media (max-width: 1340px) {
    font-size: 1.1rem;
  }
`
