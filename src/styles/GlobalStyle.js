import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
}

#root {
  margin: auto;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
}

#root>div:last-child {
	flex-grow: 1;
	margin: 91px 0 0 117px;
}
`

export default GlobalStyle
