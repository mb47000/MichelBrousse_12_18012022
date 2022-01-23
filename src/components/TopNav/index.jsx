import { StyledList, StyledLink, StyledNav } from './style'
/**
 * Top nav component.
 * @author Michel Brousse
 * @component
 * @example
 * <TopNav />
 */
const TopNav = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="profil">Profile</StyledLink>
        <StyledLink to="parameter">Réglage</StyledLink>
        <StyledLink to="community">Communauté</StyledLink>
      </StyledList>
    </StyledNav>
  )
}

export default TopNav
