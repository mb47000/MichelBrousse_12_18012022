import { Fragment } from 'react'
import { StyledCardsGroup } from './style'
import { useFetchApi } from '../../utils/hooks'
import Card from '../Card'
import Loader from '../Loader'

const CardsGroups = () => {
  const { data, isLoading, error } = useFetchApi('') // key-data should be the endpoint parameter for useFetchApi - Wait backend team
  let formatData = data.data?.keyData // Can be remove when /key-data endpoint exist and replace by data

  /**
   * Converts the number of calories into the right format.
   * @param {number} value
   * @returns {number} value
   */
  const formatKcal = (value) => {
    value = value.toString()

    if (value.length < 4) {
      return value
    }

    return `${value.slice(0, -3)}.${value.slice(-3)}`
  }

  return (
    <StyledCardsGroup>
      {error ? (
        <div>Erreur pendant la récuperation des données</div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <Card
            type={'Calories'}
            value={formatKcal(formatData.calorieCount)}
            unit={'kCal'}
          ></Card>
          <Card
            type={'Protéines'}
            value={formatData.proteinCount}
            unit={'g'}
          ></Card>
          <Card
            type={'Glucides'}
            value={formatData.carbohydrateCount}
            unit={'g'}
          ></Card>
          <Card
            type={'Lipides'}
            value={formatData.lipidCount}
            unit={'g'}
          ></Card>
        </Fragment>
      )}
    </StyledCardsGroup>
  )
}

export default CardsGroups
