import { useGetUser } from '../../utils/hooks'
import { Loader, LoaderWrapper } from '../../styles'

const Profil = () => {
  const { userData, userLoading, userError } = useGetUser()

  if (userError)
    return (
      <div>Une erreur est survenue pendant la récupération des données</div>
    )

  return userLoading ? (
    <LoaderWrapper>
      {console.log('render')}
      <Loader />
    </LoaderWrapper>
  ) : (
    <div>
      Profil
      <pre>
        <code>{JSON.stringify(userData, null, 4)}</code>
      </pre>
    </div>
  )
}

export default Profil
