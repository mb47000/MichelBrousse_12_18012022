/**
 * Fetch data from url parameter while managing state(Data, Loading, Error) with update state method from useState
 * @author Michel Brousse
 * @category Api
 * @param { string } url - The url to fetch
 * @param { Function(data<Object>) } setDataState - Update state method that takes data object from resolved promise
 * @param { Function(boolean) } setLoadingState - Update state method 
 * @param { Function(boolean) } setErrorState -  Update state method 
 * @example 
 * const [data, setData] = useState({})
 * const [isLoading, setLoading] = useState(true)
 * const [error, setError] = useState(false)
 * const url = 'http://monapi.fr/user'
 * 
 * useEffect(() => {
 * setLoading(true)
 * fetchWithState(url, setData, setLoading, setError)
 * }, [])   
 */
export async function fetchWithState(url, setDataState, setLoadingState, setErrorState) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        setDataState(data)
    } catch (err) {
        console.log(err)
        setErrorState(true)
    } finally {
        setLoadingState(false)
    }
}

