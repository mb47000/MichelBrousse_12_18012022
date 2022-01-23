import TopNav from '../TopNav'
import { StyledHeader, StyledLogo } from './style'

/**
 * Header component
 * @author Michel Brousse
 * @component
 * @example
 * return (<Header data={headerData} />)
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
