import TopNav from '../TopNav'
import { StyledHeader, StyledLogo } from './style'

/**
 * Header component.
 *
 * @component
 *
 */
const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo />
      <TopNav />
    </StyledHeader>
  )
}

export default Header
