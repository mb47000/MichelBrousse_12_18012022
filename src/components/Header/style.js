import styled from 'styled-components'
import colors from '../../styles/colors'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'

export const StyledHeader = styled.header`
  background: ${colors.primary};
	display: flex;
	box-shadow: 0px 4px 4px 0px #00000040;
`

export const StyledLogo = styled(Logo)`
  margin: 18px 10.5% 12px 28px;
`
