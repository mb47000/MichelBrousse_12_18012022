import { useState, useEffect, useContext } from 'react'
import { fetchWithState } from '../api/'
import { UserIdContext } from '../context'

const apiUrl = 'http://localhost:3090/user'

/**
 * Custom Hook. Get data from api,return states (data, loading, error) for component.
 * @author Michel Brousse
 * @category Custom Hook
 * @returns {Object.<userData:Object,userLoading:boolean,userError:boolean>} Return data, loading and error state.
 * @param {string} [endpoint=''] The endpoint to get
 * @example
 * const { data: userData, isLoading: userLoading, error: userError } = useGetUser()
 *
 * if (userError) return <Error />
 *
 * return userLoading ?
 *  <Loader />
 *  :
 *  <pre><code>{JSON.stringify(userData, null, 4)}</code></pre>
 * }
 */
export function useFetchApi(endpoint = '') {
  const { userId } = useContext(UserIdContext)
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `${apiUrl}/${userId}/${endpoint}`

  useEffect(() => {
    fetchWithState(url, setData, setLoading, setError)
  }, [userId, url])

  return { data, isLoading, error }
}
