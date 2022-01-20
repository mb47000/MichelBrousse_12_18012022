import styled from 'styled-components'

export const StyledNav = styled.nav`
    width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const StyledList = styled.ul`
    margin: 0;
	padding: 0;
	text-indent: 0;
	list-style-type: none;
	height: 33%;
`

export const StyledButton = styled.button`
  	height: 64px;
	width: 64px;
	border-radius: 6px;
    margin-top: 20px;
    padding: 0;
    &:hover {
        cursor: pointer;
    }
`

