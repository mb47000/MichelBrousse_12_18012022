import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNav = styled.nav`
	flex-grow: 1;
	padding-right: 6.05%;
`

export const StyledList = styled.ul`
    margin: 0;
	padding: 0;
	text-indent: 0;
	list-style-type: none;
	display: flex;
    justify-content: space-between;
	align-items: center;
	height: 100%;
	font-size: 24px;
	line-height: 24px;
`
export const StyledLink = styled(Link)`
    color: #FFFFFF;
	text-decoration: none;
`

