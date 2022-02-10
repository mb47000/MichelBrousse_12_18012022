import { useFetchApi } from '../../utils/hooks'
import { StyledProfile, StyledInfoContainer } from './style'
import HelloUser from '../../components/HelloUser'
import ChartsGroup from '../../components/ChartsGroup'
import CardsGroup from '../../components/CardsGroup'
import Loader from '../../components/Loader'

const Profil = () => {
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
        <Loader />
      ) : (
        <HelloUser userFirstName={userData.data.userInfos.firstName} />
      )}

      <StyledInfoContainer>
        {userError ? (
          <div>Erreur pendant la récuperation des données</div>
        ) : userLoading ? (
          <Loader />
        ) : (
          <ChartsGroup
            score={userData.data.todayScore ?? userData.data.score}
          />
        )}
        <CardsGroup />
      </StyledInfoContainer>
    </StyledProfile>
  )
}

export default Profil
