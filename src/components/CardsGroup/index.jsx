import { Fragment } from 'react'
import { StyledCardsGroup } from './style'
import { useFetchApi } from '../../utils/hooks'
import { userDataModel } from '../../utils/models'
import Card from '../Card'
import Loader from '../Loader'

/**
 * CardGroups Component
 * @component
 * @returns {component}
 */
const CardsGroups = () => {
  const { data, isLoading, error } = useFetchApi('') // key-data should be the endpoint parameter for useFetchApi - Wait backend team

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
            value={formatKcal(userDataModel(data.data).keyData.calorieCount)}
            unit={'kCal'}
          ></Card>
          <Card
            type={'Protéines'}
            value={userDataModel(data.data).keyData.proteinCount}
            unit={'g'}
          ></Card>
          <Card
            type={'Glucides'}
            value={userDataModel(data.data).keyData.carbohydrateCount}
            unit={'g'}
          ></Card>
          <Card
            type={'Lipides'}
            value={userDataModel(data.data).keyData.lipidCount}
            unit={'g'}
          ></Card>
        </Fragment>
      )}
    </StyledCardsGroup>
  )
}

export default CardsGroups
