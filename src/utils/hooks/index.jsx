import { useState, useEffect, useContext } from 'react'
import { fetchWithState } from '../api/'
import { UserIdContext } from '../context'

const apiUrl = 'http://localhost:3090/user'

/**
 * Custom Hook. Get user data from api/user/:id with fetchWithState() and return states (data, loading, error) for component.
 * @author Michel Brousse
 * @category Custom Hook
 * @returns {Object.<userData:Object,userLoading:boolean,userError:boolean>} Return data, loading and error state.
 * @example
 * const { userData, userLoading, userError } = useGetUser()
 *
 * if (userError) return <Error />
 *
 * return userLoading ?
 *  <Loader />
 *  :
 *  <pre><code>{JSON.stringify(userData, null, 4)}</code></pre>
 * }
 */
export function useGetUser() {
  const { userId } = useContext(UserIdContext)
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `${apiUrl}/${userId}`

  useEffect(() => {
    fetchWithState(url, setData, setLoading, setError)
  }, [userId])

  return { userData: data, userLoading: isLoading, userError: error }
}

/**
 * Custom Hook. Get activity data from api/user/:id/activity with fetchWithState() and return states (data, loading, error) for component.
 * @author Michel Brousse
 * @category Custom Hook
 * @returns {Object.<activityData:Object,activityLoading:boolean,activityError:boolean>} Return data, loading and error state.
 * @example
 * const { activityData, activityLoading, activityError } = useGetActivity()
 *
 * if (activityError) return <Error />
 *
 * return activityLoading ?
 *  <Loader />
 *  :
 *  <pre><code>{JSON.stringify(activityData, null, 4)}</code></pre>
 * }
 */
export function useGetActivity() {
  const { userId } = useContext(UserIdContext)
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `${apiUrl}/${userId}/activity`

  useEffect(() => {
    fetchWithState(url, setData, setLoading, setError)
  }, [userId])

  return {
    activityData: data,
    activityLoading: isLoading,
    activityError: error,
  }
}

/**
 * Custom Hook. Get average sessions data from api/user/:id/average-sessions with fetchWithState() and return states (data, loading, error) for component.
 * @author Michel Brousse
 * @category Custom Hook
 * @returns {Object.<averageData:Object,averageLoading:boolean,averageError:boolean>} Return data, loading and error state.
 * @example
 * const { averageData, averageLoading, averageError } = useGetAverageSession()
 *
 * if (averageError) return <Error />
 *
 * return averageLoading ?
 *  <Loader />
 *  :
 *  <pre><code>{JSON.stringify(averageData, null, 4)}</code></pre>
 * }
 */
export function useGetAverageSession() {
  const { userId } = useContext(UserIdContext)
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `${apiUrl}/${userId}/average-sessions`

  useEffect(() => {
    fetchWithState(url, setData, setLoading, setError)
  }, [userId])

  return { averageData: data, averageLoading: isLoading, averageError: error }
}

/**
 * Custom Hook. Get today data from api/user/:id/today-score with fetchWithState() and return states (data, loading, error) for component.
 * @author Michel Brousse
 * @category Custom Hook
 * @returns {Object.<todayData:Object,todayLoading:boolean,todayError:boolean>} Return data, loading and error state.
 * @example
 * const { todayData, todayLoading, todayError } = useGetTodayScore()
 *
 * if (todayError) return <Error />
 *
 * return todayLoading ?
 *  <Loader />
 *  :
 *  <pre><code>{JSON.stringify(todayData, null, 4)}</code></pre>
 * }
 */
export function useGetTodayScore() {
  const { userId } = useContext(UserIdContext)
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `${apiUrl}/${userId}/today-score`

  useEffect(() => {
    fetchWithState(url, setData, setLoading, setError)
  }, [userId])

  return { todayData: data, todayLoading: isLoading, todayError: error }
}

/**
 * Custom Hook. Get activities data from api/user/:id/activities with fetchWithState() and return states (data, loading, error) for component.
 * @author Michel Brousse
 * @category Custom Hook
 * @returns {Object.<activitiesData:Object,activitiesLoading:boolean,activitiesError:boolean>} Return data, loading and error state.
 * @example
 * const { activitiesData, activitiesLoading, activitiesError } = useGetactivitiesType()
 *
 * if (averageError) return <Error />
 *
 * return activitiesLoading ?
 *  <Loader />
 *  :
 *  <pre><code>{JSON.stringify(activitiesData, null, 4)}</code></pre>
 * }
 */
export function useGetActivitiesType() {
  const { userId } = useContext(UserIdContext)
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `${apiUrl}/${userId}/activities`

  useEffect(() => {
    fetchWithState(url, setData, setLoading, setError)
  }, [userId])

  return {
    activitiesData: data,
    activitiesLoading: isLoading,
    activitiesError: error,
  }
}

/**
 * Custom Hook. Get key data from api/user/:id/key-data with fetchWithState() and return states (data, loading, error) for component.
 * @author Michel Brousse
 * @category Custom Hook
 * @returns {Object.<keyData:Object,keyLoading:boolean,keyError:boolean>} Return data, loading and error state.
 * @example
 * const { keyData, keyLoading, keyError } = useGetKeyData()
 *
 * if (keyError) return <Error />
 *
 * return keyLoading ?
 *  <Loader />
 *  :
 *  <pre><code>{JSON.stringify(keyData, null, 4)}</code></pre>
 * }
 */
export function useGetKeyData() {
  const { userId } = useContext(UserIdContext)
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `${apiUrl}/${userId}/key-data`

  useEffect(() => {
    fetchWithState(url, setData, setLoading, setError)
  }, [userId])

  return { keyData: data, keyDataLoading: isLoading, keyDataError: error }
}
