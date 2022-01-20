import { useLocation } from 'react-router-dom'
import { StyledSideBar, StyledCopyright } from './style'
import { ProfilNavigation } from '../VerticalNav'

const SideBar = () => {
  const location = useLocation()

  return (
    <StyledSideBar>
      {location.pathname === '/profil' && <ProfilNavigation />}
      <StyledCopyright>Copyright, SportSee 2020</StyledCopyright>
    </StyledSideBar>
  )
}

export default SideBar
