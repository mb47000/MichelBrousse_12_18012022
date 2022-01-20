import styled from 'styled-components'
import colors from '../../styles/colors'

export const StyledSideBar = styled.aside`
    width: 117px;
    height: 100vh;
    background: ${colors.primary};
    position: fixed;
    padding-top: 91px;
    display: flex;
    align-items: end;
    flex-wrap: wrap;
`
export const StyledCopyright = styled.div`
    width: 100%;
	font-size: 12px;
	font-weight: 500;
	line-height: 24px;
	color: #ffffff;
	transform: rotate(-90deg) translateX(65%);
	white-space: nowrap;
`

