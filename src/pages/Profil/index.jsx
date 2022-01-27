import { useFetchApi } from '../../utils/hooks'
import { StyledProfile, StyledInfoContainer } from './style'
import HelloUser from '../../components/HelloUser'
import ChartsGroup from '../../components/ChartsGroup'
import CardsGroup from '../../components/CardsGroup'
import { Loader, LoaderWrapper } from '../../styles'

const Profil = () => {
  console.log('render')
  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useFetchApi()

  return (
    <StyledProfile>
      {userError ? (
        <div>Erreur pendant la récuperation des données</div>
      ) : userLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <HelloUser userFirstName={userData.data.userInfos.firstName} />
      )}

      <StyledInfoContainer>
        <ChartsGroup />
        <CardsGroup />
      </StyledInfoContainer>

      <pre>
        <code>{JSON.stringify(userData, null, 4)}</code>
      </pre>
    </StyledProfile>
  )
}

export default Profil
