import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
}

html {
	font-size: 1rem;
}

#root {
  margin: auto;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
}

main {
	flex-grow: 1;
	margin: 5.6875rem 0 0 7.3125rem;
}

.chartgroup {
	@media (max-width: 1160px) {
    margin-top: 1rem;
  }
}
`

export default GlobalStyle
