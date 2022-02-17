import { useEffect } from 'react'
import { StyledChartsGroup } from './style'
import { Plot, Linear, Spider, Radial } from '../D3Charts'
import PropTypes from 'prop-types'
import { useFetchApi } from '../../utils/hooks'
import {
  activityDataModel,
  perfsDataModel,
  sessionsDataModel,
} from '../../utils/models'
import Loader from '../Loader'

/**
 * ChartsGroups component
 * @component
 * @param {number} {score}
 * @returns {component}
 */
const ChartsGroups = ({ score }) => {
  const {
    data: perfsData,
    isLoading: perfsLoading,
    error: perfsError,
  } = useFetchApi('performance')

  const {
    data: sessionsData,
    isLoading: sessionsLoading,
    error: sessionsError,
  } = useFetchApi('average-sessions')

  const {
    data: activityData,
    isLoading: activityLoading,
    error: activityError,
  } = useFetchApi('activity')

  useEffect(() => {
    return () => {
      // console.log('unmounted')
    }
  })

  return (
    <StyledChartsGroup>
      {activityError ? (
        <div>Erreur pendant la récuperation des données</div>
      ) : activityLoading ? (
        <Loader />
      ) : (
        <Plot activityData={activityDataModel(activityData.data).sessions} />
      )}

      {sessionsError ? (
        <div>Erreur pendant la récuperation des données</div>
      ) : sessionsLoading ? (
        <Loader />
      ) : (
        <Linear sessionsData={sessionsDataModel(sessionsData.data).sessions} />
      )}

      {perfsError ? (
        <div>Erreur pendant la récuperation des données</div>
      ) : perfsLoading ? (
        <Loader />
      ) : (
        <Spider perfs={perfsDataModel(perfsData.data).data} />
      )}

      <Radial score={score} />
    </StyledChartsGroup>
  )
}

ChartsGroups.propTypes = {
  score: PropTypes.number.isRequired,
}

export default ChartsGroups
