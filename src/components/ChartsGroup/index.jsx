import { useEffect } from 'react'
import { StyledChartsGroup } from './style'
import { Plot, Linear, Spider, Radial } from '../D3Charts'
import PropTypes from 'prop-types'
import { useFetchApi } from '../../utils/hooks'
import Loader from '../Loader'

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
        <Plot activityData={activityData.data.sessions} />
      )}

      {sessionsError ? (
        <div>Erreur pendant la récuperation des données</div>
      ) : sessionsLoading ? (
        <Loader />
      ) : (
        <Linear sessionsData={sessionsData.data.sessions} />
      )}

      {perfsError ? (
        <div>Erreur pendant la récuperation des données</div>
      ) : perfsLoading ? (
        <Loader />
      ) : (
        <Spider perfs={perfsData.data.data} />
      )}

      <Radial score={score} />
    </StyledChartsGroup>
  )
}

ChartsGroups.propTypes = {
  score: PropTypes.number.isRequired,
}

export default ChartsGroups
