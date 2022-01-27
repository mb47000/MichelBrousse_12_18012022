import { useFetchApi } from '../../utils/hooks'
import { StyledProfile } from './style'
import HelloUser from '../../components/HelloUser'
import { Loader } from '../../styles'

const Profil = () => {
  console.log('render')
  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useFetchApi()

  return (
    <StyledProfile>
      {userError ? (
        <div>Erreur pendant la récuperation des données</div>
      ) : userLoading ? (
        <Loader />
      ) : (
        <HelloUser userFirstName={userData.data.userInfos.firstName} />
      )}

      <pre>
        <code>{JSON.stringify(userData, null, 4)}</code>
      </pre>
    </StyledProfile>
  )
}

export default Profil
