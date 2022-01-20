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
}
`

export default GlobalStyle
