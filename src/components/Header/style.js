import styled from 'styled-components'
import colors from '../../styles/colors'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'

export const StyledHeader = styled.header`
  background: ${colors.primary};
	display: flex;
	box-shadow: 0px 4px 4px 0px #00000040;
  width: 100%;
  position: fixed;
  max-width: inherit;
  z-index: 1;
`

export const StyledLogo = styled(Logo)`
  margin: 18px 10.5% 12px 28px;
`
